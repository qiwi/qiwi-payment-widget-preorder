import 'url-search-params-polyfill';

export default class Preorder {
    _getParameterByName(param, urlSearch = window.location.search) {
        const searchParams = new URLSearchParams(urlSearch);

        return searchParams.get(param);
    }

    _getAlias() {
        return window.location.pathname.match(/([^/]*)\/*$/)[1];
    }

    _getHostName(url = '') {
        const hostname = url
            .split('//')[1]
            .split('/')[0]
            .split(':')[0];

        return hostname.replace(/\./g, '-');
    }

    _makeLinkCheckout(params, extras) {
        const url = 'https://oplata.qiwi.com/create';
        const parsedParams = new URLSearchParams(params);
        Object.getOwnPropertyNames(extras).forEach(extraName => {
            parsedParams.append(`extras[${extraName}]`, `${extras[extraName]}`);
        });

        return `${url}?${parsedParams.toString()}`;
    }

    _makeRequest() {
        let url = 'https://my.qiwi.com/api/widgets/widget-info';

        let param = `merchantSitePublicKey=${this._merchantId}`;

        if (this._widgetAliasCode && !this._merchantId) {
            param = `widgetAliasCode=${this._widgetAliasCode}`;
        }

        return fetch(`${url}?${param}`, {
            mode: 'cors'
        })
            .then((response) => {
                if (response.status >= 400) {
                    window.dataLayer.push({
                        event: 'load.error',
                        eventAction: 'Mechant name load error'
                    });

                    throw new Error('LoadError');
                }
                return response;
            })
            .then((response) => response.json());
    }

    async getMerchantInfo() {
        this._merchantId = this._getParameterByName('publicKey');

        this._widgetAliasCode = this._getAlias();

        if (this._merchantId || this._widgetAliasCode) {
            try {
                const data = await this._makeRequest();

                this._merchantInfo = data.result;

                return data.result;
            } catch (err) {
                throw err;
            }
        } else {
            throw new Error('No public key or alias in url');
        }
    }

    redirect = (amount, isDirect) => {
        const {
            widgetSuccessUrl,
            widgetFailUrl,
            merchantSitePublicKey,
            widgetAliasCode
        } = this._merchantInfo;

        const publicKey = merchantSitePublicKey;

        const successUrl = widgetSuccessUrl || '';

        const failUrl = widgetFailUrl || '';

        const widgetAlias = widgetAliasCode || '';

        if (publicKey) {
            const checkoutParams = {
                publicKey,
                amount,
                successUrl,
                failUrl
            };

            const extras = {
                widgetAlias,
                widgetRefferer: 'my-qiwi-com'
            };

            let link = this._makeLinkCheckout(checkoutParams, extras);

            if (isDirect) {
                window.location.href = link;
            } else {
                window.open(link, '_blank');
            }
        }
    };

    addMetricCounter = (counter) => {
        if (!counter) {
            return false;
        }

        try {
            const yaCounter = `yaCounter${counter}`;
            window[yaCounter] = new window.Ya.Metrika({
                id: counter,
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true
            });
        } catch (e) {}
    };
}
