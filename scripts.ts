var summary = document.getElementsByClassName('summary')[0]
if (!summary.classList.contains('decomposed')) {
    var nodes : Element[] = []
    summary.classList.add('decomposed')
    var textContent = summary.textContent as string
    summary.childNodes.forEach(n => summary.removeChild(n))
    for (var i = 0; i < textContent.length; i ++) {
        let node = document.createElement('span')
        node.appendChild(document.createTextNode(textContent.charAt(i)))
        nodes.push(node)
        summary.appendChild(node)
    }
}

function dyeSummary(element : Element) {
    let length = element.childNodes.length
    let i = 0
    setInterval(() => {
        let part = element.childNodes[i] as HTMLElement
        part.style.color = 'red'
        setTimeout(() => {
            part.style.color = null
        }, 1000);
        i ++
        if (i >= length) {
            i = 0
        }
    }, 200)
}

dyeSummary(summary)