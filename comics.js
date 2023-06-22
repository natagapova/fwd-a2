const email = "n.agapova@innopolis.university";
const params = new URLSearchParams;
params.append('email', email);

const myURL = `https://fwd.innopolis.university/api/hw2?email=${params.toString()}`;

fetch(myURL)
    .then(response => response.json())
    .then(data => {
        const comicID = data;
        const comicParams = new URLSearchParams;
        comicParams.append('id', comicID);
        const comicURL = `https://fwd.innopolis.university/api/comic?${comicParams.toString()}`;

        fetch(comicURL)
            .then(response => response.json())
            .then(comicData => {
                const img = comicData.img;
                const alt = comicData.alt;
                const safeTitle = comicData.safe_title;
                const pubDate = new Date(comicData.year, comicData.month, comicData.day).toLocaleDateString();

                const comicImg = document.createElement('img'); 
                comicImg.src = img; 
                comicImg.alt = alt; 
        
                const comicTitle = document.createElement('h2'); 
                comicTitle.textContent = safeTitle; 
        
                const comicDate = document.createElement('p'); 
                comicDate.textContent = `Published on ${pubDate}`; 
        
                const container = document.getElementById('container'); 
        
                container.appendChild(comicImg); 
                container.appendChild(comicTitle); 
                container.appendChild(comicDate);
            })
    })
    .catch(error => console.log('Sorry, unpredictable error: ', error));