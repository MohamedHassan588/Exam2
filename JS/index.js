$('.inner').css({ 'left': '-75%', 'transition': 'all ease-in-out 1s' })
$('#cancel').css({ 'display': 'none', 'opacity': '0' })
$('#btn').css({ 'display': 'block', 'opacity': '1', 'transition': 'all ease-in-out 1s ' })
$('.links ul li').hide(1000)
$('#cancel').click(function () {
    $('.inner').css({ 'left': '-75%', 'transition': 'all ease-in-out 1s' })
    $('#cancel').css({ 'display': 'none', 'opacity': '0' })
    $('#btn').css({ 'display': 'block', 'opacity': '1', 'transition': 'all ease-in-out 1s ' })
    $('.links ul li').hide(1000)

})
$('#btn').click(function () {
    $('.inner').css({ 'left': '0%', 'transition': 'all ease-in-out 1s' })
    $('#cancel').css({ 'display': 'block', 'opacity': '1', 'transition': 'all ease-in-out 1s ' })
    $('#btn').css({ 'display': 'none', 'opacity': '0', 'transition': 'all ease-in-out 1s ' })
    $('.links ul li').show(1000)
})

function display() {
    let temp = ``
    for (const i in movFinsh.results) {
        temp +=
            `<div class="item g-4 p-4 col-lg-4 col-md-6 ">
            <div class="position-relative  ">
                <img class="w-100" src='https://image.tmdb.org/t/p/w500${movFinsh.results[i].poster_path}'>
                <div
                    class="text p-md-2 h-100 d-flex flex-column justify-content-center  position-absolute start-0 end-0">
                    <h4 class="">'${movFinsh.results[i].original_title} '</h4>
                    <p class="">'${movFinsh.results[i].overview} '</p>
                    <span>Rate</span>
                    <span>date</span>
                </div>
            </div>
        </div>`
    }
    document.getElementById('display').innerHTML = temp
}



let movFinsh;


async function getMovie() {
    let movies = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=000a415a5b46f69842a620b53d6a0620`)
    let moveFinsh = await movies.json();

    $('.word').keyup(function () {
        let word = $('.word').val()
        let temp = ''
        for (const i in moveFinsh.results) {
            if ((moveFinsh.results[i].original_title.toLowerCase()).includes(word.toLowerCase()) == true) {
                temp +=
                    `<div class="item g-4 p-4 col-md-4 ">
                    <div class="position-relative  ">
                        <img class="w-100" src='https://image.tmdb.org/t/p/w500${moveFinsh.results[i].poster_path}'>
                        <div
                            class="text p-md-2 h-100 d-flex flex-column justify-content-center  position-absolute start-0 end-0">
                            <h4 class="">'${moveFinsh.results[i].original_title} '</h4>
                            <p class="">'${moveFinsh.results[i].overview} '</p>
                            <span>Rate</span>
                            <span>date</span>
                        </div>
                    </div>
                </div>`
            }
        } document.getElementById('display').innerHTML = temp;
    })
} getMovie()

async function getMovies(callBack) {
    let movies = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=000a415a5b46f69842a620b53d6a0620`)
    movFinsh = await movies.json();
    callBack();
} getMovies(display)


$('ul li a').click(function () {
    let hre = $(this).attr('hre')
    if (hre == 'Trending') {
        async function getMovies(callBack) {
            let movies = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=000a415a5b46f69842a620b53d6a0620`)
            movFinsh = await movies.json();
            callBack();
        } getMovies(display)
    } else {
        async function getMovies(callBack) {
            let movies = await fetch(`https://api.themoviedb.org/3/movie/${hre}?api_key=000a415a5b46f69842a620b53d6a0620`)
            movFinsh = await movies.json();
            callBack();
        } getMovies(display)
    }
})

$('.search').keyup(function () {
    let search = $('.search').val()
    let temp = ''
    for (const i in movFinsh.results) {
        if ((movFinsh.results[i].original_title.toLowerCase()).includes(search.toLowerCase()) == true) {
            temp +=
                `<div class="item  g-4 col-4">
            <div class="position-relative  " >
                <img class="w-100" src='https://image.tmdb.org/t/p/w500${movFinsh.results[i].poster_path}'>
                <div class="text p-md-2 h-100 d-flex flex-column justify-content-center  position-absolute start-0 end-0">
                    <h4 class="">'${movFinsh.results[i].original_title} '</h4>
                    <p class="">'${movFinsh.results[i].overview} '</p>
                    <span>Rate</span>
                    <span>date</span>
                </div>
            </div>
            </div>`
        }
    } document.getElementById('display').innerHTML = temp;
})


$('.contact input').keyup(function () {
    if ($(this).attr('placeholder') == 'Enter Your Name') {
        let inPutVal = $(this).val()
        let rejx = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/
        if (rejx.test(inPutVal) == true) {
            $('.alert-rejx-name').css({ 'display': 'none' })
        } else {
            $('.alert-rejx-name').css({ 'display': 'block' })
        }
    } else if ($(this).attr('placeholder') == 'Enter Your Email') {
        let inPutVal = $(this).val()
        let rejx = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
        if (rejx.test(inPutVal) == true) {
            $('.alert-rejx-email').css({ 'display': 'none' })
        } else {
            $('.alert-rejx-email').css({ 'display': 'block' })
        }
    } else if ($(this).attr('placeholder') == 'Enter Your Number') {
        let inPutVal = $(this).val()
        let rejx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
        if (rejx.test(inPutVal) == true) {
            $('.alert-rejx-phone').css({ 'display': 'none' })
        } else {
            $('.alert-rejx-phone').css({ 'display': 'block' })
        }
    } else if ($(this).attr('placeholder') == 'Enter Your Password') {
        let inPutVal = $(this).val()
        let rejx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
        if (rejx.test(inPutVal) == true) {
            $('.alert-rejx-pass').css({ 'display': 'none' })
        } else {
            $('.alert-rejx-pass').css({ 'display': 'block' })
        }
    } else if ($(this).attr('placeholder') == 'Enter Your Re-Password') {
        let inPutVal = $(this).val()
        console.log(inPutVal)
        console.log($('.alert-rejx-pass').val())
        if (inPutVal == $('.alert-rejx-pass').val()) {
            $('.alert-rejx-re-pass').css({ 'display': 'block' })
        } else {
            $('.alert-rejx-re-pass').css({ 'display': 'none' })
        }
    } else if (($(this).attr('placeholder') == 'Enter Your Age')){
        let inPutVal = $(this).val()
        console.log(inPutVal)
        let rejx = /^[1-9][0-9]{1}$/
        if (rejx.test(inPutVal) == true) {
            $('.alert-rejx-age').css({ 'display': 'none' })
        } else {
            $('.alert-rejx-age').css({ 'display': 'block' })
        }
    }
})