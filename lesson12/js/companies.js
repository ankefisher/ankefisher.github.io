const requestURL = 'ankefisher.github.io/lesson12/data/companies.json'; 

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
   
        h2.textContent = companies[i].name + ' ' + companies[i].lastname;
        birthDate.textContent = 'Birth Date: ' + companies[i].birthdate;
        birthPlace.textContent = 'Birth Place: ' + companies[i].birthplace;
        image.setAttribute('src', companies[i].imageurl);
        image.setAttribute('alt', companies[i].name + ' ' +companies[i].lastname + '-' + companies[i].order);

        card.appendChild(h2);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(p);
        card.appendChild(image);
    
        document.querySelector('div.cards').appendChild(card);

    }
  });