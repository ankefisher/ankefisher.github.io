const requestURL = 'Users/ankefisher/WDD 230/ankefisher.github.io/lesson12/data/companies.json'; 

fetch(requestURL)
  .then(function (response) {     
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);       
    const companies = jsonObject['companies'];

    for (let i = 0; i < prop.length; i++ ) { 
        let card = document.createElement('section'); 
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let image = document.createElement('img'); 
        let birthDate = document.createElement('p');
        let birthPlace = document.createElement('p');          
   
        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        birthDate.textContent = 'Birth Date: ' + prophets[i].birthdate;
        birthPlace.textContent = 'Birth Place: ' + prophets[i].birthplace;
        image.setAttribute('src', prophets[i].imageurl);
        image.setAttribute('alt', prophets[i].name + ' ' +prophets[i].lastname + '-' + prophets[i].order);

        card.appendChild(h2);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(p);
        card.appendChild(image);
    
        document.querySelector('div.cards').appendChild(card);

    }
  });