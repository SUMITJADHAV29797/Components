import Accordion from "../components/Accordion";
function AccordionPage() {
    const items = [
        {
            id:'jksdbb',
            label:'can i use react on a project?',
            content:'you can use react on any project you want'
        },
        {
            id:'ukbmxas',
            label:'can i use javascript on a project?',
            content:'you can use javascript on any project you want'
        },
        {
            id:'avcmz',
            label:'can i use css on a project?',
            content:'you can use css on any project you want'
        },
    ]
    return<Accordion items={items}/>
}

export default AccordionPage;