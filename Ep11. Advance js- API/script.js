const img = document.querySelector('img')
const btn = document.querySelector('.btn')
const mainn = document.querySelector('.main')
const loadingText = document.querySelector('.loading');



btn.addEventListener('click', (e) => {

        e.preventDefault()


        loadingText.style.display = 'inline';

        fetch('https://dog.ceo/api/breeds/image/random')
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                img.src = json.message;

            });

        img.addEventListener('load', () => {
            loadingText.style.display = 'none';
            img.style.display = 'block';
        });

    }




)