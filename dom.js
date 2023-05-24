class BookmundiTest {
    //Change the class name of any dom elements
    changeClassName(id, newClass) {
        return document.getElementById(id).className = newClass;
    }

    //Get datasets from dom elements
    getDataSets(id, dataSetAttr) {
        return document.getElementById(id).getAttribute(dataSetAttr);
    }

    //Inject new dom element
    injectNewDom(id, htmlDom) {
        return document.getElementById(id).innerHTML = htmlDom;
    }

    //Make both ajax and get request
    postRequest(data,url) {
        fetch(url, {

            method: 'post',

            body: data,

            headers: {

                'Accept': 'application/json',

                'Content-Type': 'application/json'

            }

        }).then((response) => {

            return response.json()

        }).then((res) => {

            if (res.status === 201) {

                console.log("Post successfully created!")

            }

        }).catch((error) => {

            console.log(error)

        })

    }

    getRequest(url) {
        fetch(url, {

            method: 'get',

            headers: {

                'Accept': 'application/json',

                'Content-Type': 'application/json'

            }

        }).then((response) => {

            return response.json()

        }).then((res) => {

            if (res.status === 200) {

                console.log("success!")

            }

        }).catch((error) => {

            console.log(error)

        })

    }

    //Get and set values from input box/checkbox/select dropdown
    getAndSetValue(selecter,newVal) {
        let getValue = document.querySelector(selecter).value;
        let setValue = document.querySelector(selecter).value=newVal;
        console.log(getValue,setValue);
    }

    //Make 3 POST requests at the same time which need to be resolved all at the same time
    multipleRequest(url1,url2,url3) {
        Promise.allSettled([
            fetch(url1),
            fetch(url2),
            fetch(url3),
          ])
          .then(async([res1, res2, res3]) => {
            const a = await res1.json();
            const b = await res2.json();
            const c = await res3.json();
            console.log(a);
            console.log(b);
            console.log(c);
          })
          .catch(error => {
            console.log(error);
          });
    }
}

const bookmundiTest = new BookmundiTest();

console.log(bookmundiTest.changeClassName('hell', 'hiiii'));
console.log(bookmundiTest.getDataSets('hell', 'data-ids'));
console.log(bookmundiTest.injectNewDom('inject', 'hiiii'));