const apiKey = "G84sZa_qIBxyi8LZqMEwEnpRe4VDlW4NU2PNWULLi8bUPo5Y6ZTKpqckxDuWMVJ6WjfoY2ZPClDwNwQJlaZx_fNdxqk_eEGuao3E0RPaTnRudwFIgXDzQm_raxeZXnYx"

const Yelp = {
    search: function(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
            headers:{Authorization: `Bearer ${apiKey}`}}).then(response => {
                return response.json();}).then(jsonResponse =>{
                    if(jsonResponse.businesses){
                        return jsonResponse.businesses.map(business => ({
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zipCode,
                            category: business.categories[0].title,
                            rating: business.rating,
                            reviewCount: business.review_count
                        }));
                    }
                });
    }
};

export default Yelp;