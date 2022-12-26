const content = document.getElementById('inputContent')
const date = document.getElementById('inputDate')
const time = document.getElementById('inputTime')
// catch the input text box
const inputContent = document.getElementById('inputContent')
// catch the buutons
const btnAdd = document.getElementById('btnAdd')
const btnDeleteFirst = document.getElementById('btnDeleteFirst')
const btnDeleteLast = document.getElementById('btnDeleteLast')
const eventList = document.getElementById('eventList')

//Array to store the event data
const listContent = []

function refresh() {
    let strHtml = ''

    listContent.forEach(function (event) {           //event OR item
        strHtml = strHtml + `
        <div class="event">
            <div>
                    <p>Event: ${event.content}</p>
                    <p>Time: ${event.date} - ${event.time}</p>
            </div> 
            <hr />   
        </div>
        `
    })

    eventList.innerHTML = strHtml
}

btnAdd.addEventListener('click', function () {
    // console.log(content.value)
    // console.log(date.value)
    // console.log(time.value)

    // listContent.push({           // push to the bottom 
    //     content: content.value,
    //     date: date.value,
    //     time: time.value
    // })

    listContent.push({       // push to the top OR unshift      
        content: content.value,
        date: date.value,
        time: time.value
    })

    //console.log("listContent",listContent);
    //Can use .append 

    // listContent.forEach(function (event){           //event OR item
    //     console.log('event',event);
    // })

    refresh();

})

// When user hit 'Enter' in the text box, add to the list  
inputContent.addEventListener('keyup', function (event) {

    if(event.key === 'Enter'){
        listContent.push({       // push to the top OR unshift      
        content: content.value,
        date: date.value,
        time: time.value
    })

    refresh();
    }
    
})

btnDeleteFirst.addEventListener('click', function () {
    listContent.shift()

    refresh();

})

btnDeleteLast.addEventListener('click', function () {
    listContent.pop()

    refresh();

})

