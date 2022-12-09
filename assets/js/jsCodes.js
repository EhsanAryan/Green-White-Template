const sidebar = document.querySelector(".sidebar");
const all_header_li = document.querySelectorAll(".header-li");
const allDescSpan = document.querySelectorAll(".desc-span");
const sidebar_trigger = document.getElementById("lock-sidebar-trigger");
const contentSection = document.querySelector(".content");
let isSidebarExpanded = false;


sidebar.addEventListener("mouseover" , () => {
    if(!isSidebarExpanded) {
        sidebar.classList.add("expanded-sidebar");
        for(let header_li of all_header_li) {
            header_li.classList.add("show-element");
        }
        for(let descSpan of allDescSpan){
            descSpan.classList.add("show-element");
        }
    }
});


sidebar.addEventListener("mouseleave" , () => {
    if(!isSidebarExpanded) {
        sidebar.classList.remove("expanded-sidebar");
        for(let header_li of all_header_li) {
            header_li.classList.remove("show-element");
        }
        for(let descSpan of allDescSpan){
            descSpan.classList.remove("show-element");
        }
    }
});


sidebar_trigger.addEventListener("change" , (event) => {
    if(event.target.checked) {
        sidebar.classList.add("expanded-sidebar");
        contentSection.classList.add("content-with-sidebar");
        for(let header_li of all_header_li) {
            header_li.classList.add("show-element");
        }
        for(let descSpan of allDescSpan){
            descSpan.classList.add("show-element");
        }
        isSidebarExpanded = true;
    }
    else {
        sidebar.classList.remove("expanded-sidebar");
        contentSection.classList.remove("content-with-sidebar");
        for(let header_li of all_header_li) {
            header_li.classList.remove("show-element");
        }
        for(let descSpan of allDescSpan){
            descSpan.classList.remove("show-element");
        }
        isSidebarExpanded = false;
    }
});

onresize = () => {
    if(window.innerWidth < 768) {
        sidebar.classList.remove("expanded-sidebar");
        contentSection.classList.remove("content-with-sidebar");
        for(let header_li of all_header_li) {
            header_li.classList.remove("show-element");
        }
        for(let descSpan of allDescSpan){
            descSpan.classList.remove("show-element");
        }
        isSidebarExpanded = false;
        sidebar_trigger.checked = false;
    }
}
