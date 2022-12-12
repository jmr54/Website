function Images() {
    const {useState} = React

    const {useEffect} = React

    const [image, setImage] = useState([])

    useEffect(() => {
        fetch('https://api.unsplash.com/users/cloudxxxx/photos?client_id=NMLxKUhiZvvOvN4KygmsmdGbE8foG6dAyu60YbefYag&fit=scale&w=500&h=450')
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw response;
        })
        .then(data => {
            setImage(data);
        })
        .catch (error => {
            console.error("Error", error)
        })
    } , [])
    
    return (    
        <div class="row row-cols-1 row-cols-md-3 g-4">
            {image.map((item, key)=>{
                return(
                    <div class="col">
                    <div class="card h-100">
                    <img src={item.urls.full} class="card-img-top" alt={key}/>
                    <div class="card-body">
                        <a href={item.links.download}><h5 class="card-title">Click here to download</h5></a>
                        <p class="card-text">
                            <p>Description: {item.description}</p>
                            <p>Uploaded on : {item.created_at}</p>
                        </p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Number of likes {item.likes}</small>
                    </div>
                    </div>
                </div>
                )
            })}
        </div>
    )
}



ReactDOM.render(<Images />, document.querySelector("#image"))
