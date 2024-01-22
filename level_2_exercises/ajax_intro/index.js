// ajax intro lesson, menoko og, 1-22-24
// XMLHttpRequest

// how to create a request and what parts are important for request


// xhr.onreadystatechange
// xhr.readyState
// xhr.status

const xhr = new XMLHttpRequest()

xhr.onreadystatechange = function(){
    if( xhr.readyState === 4 && xhr.status === 200){
        
    }
}

// xhr.readyState
     // 1 - request has been sent
    // 2 
    // 3
    // 4

// xhr.status
// we want code of 200 - good to go.
// from my cybersecurity knowledge:
// http responses meaning:
// 100-199 informational- hold on !
//200-299 here ya go !
// 300-399 go away!
// 400-499 you fucked up!
// 500-599 i or we fucked up!