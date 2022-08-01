const init = () => {
    const inputForm = document.querySelector('form')
    inputForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        
        const input = document.getElementById('searchByID')
        //console.log(input.value)
    
    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(resp => resp.json())
    .then(data=>{ 
      const title= document.querySelector('section#movieDetails h4')
      const summary= document.querySelector('section#movieDetails p')
      title.innerText = data.title
      summary.innerText = data.summary
      inputForm.reset()
    })
  })
}
document.addEventListener('DOMContentLoaded', init);