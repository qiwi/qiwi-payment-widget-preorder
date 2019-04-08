export default function OptionalRenderer({when, children}) {
    return ((when) ? children: null);
}