const url = '../docs/sample.pdf';

let pdfDoc = null, 
    pageNum = 1, 
    pageIsRendering = false,
    pageNumIsPending = false;

const scale = 1.5,
    canvas = document.querySelector('#pdf-render'),
    cts = canvas.getContext('2d');

// Render the page
const renderPage = (num) => {
    pageIsRendering = true;

    // Get the page
    pdfDoc.getPage(num).then((page) => {
        // Set scale
        const viewPort = page.getViewport({ scale })
    })
}

// Get the document
pdfjsLib.getDocument(url).promise.then((_pdfDoc) => {
    pdfDoc = _pdfDoc;
    
    document.querySelector('#page-count').textContent = pdfDoc.numPages;

    renderPage(pageNum);
});