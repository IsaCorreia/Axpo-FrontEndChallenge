export function smartTooltipTitle () {
    const element = document.getElementsByClassName( "details-info-title" );
    element.addEventListener( "mouseover", toggleTitleOnTruncate)
}

export function toggleTitleOnTruncate (event) {
    const el = event.target.element;
    el.title = el.innerText;
}