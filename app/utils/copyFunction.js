export const copyText = (id, e) => {
    console.log("id: ", id)
    e.preventDefault();
    e.stopPropagation()
    const element = document.getElementById(id).innerText;
    console.log("element: ", element)
    navigator.clipboard.writeText(element).then(() => {
        alert("text copied to clipboard")
    }).catch(err => console.log("error while copying"))
}