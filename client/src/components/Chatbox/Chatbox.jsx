import './Chatbox.css'
 export function Chatbox(){





return(
<>
<div className='Chatbox-container'>
<div className='box-hero'>
<h1>Course Companion</h1>
<h4>Discover UNT CS courses and professors powered by real student insights</h4>
</div>
<div className='input-contents'>
    <textarea placeholder='Ask about csce 2110 difficulty'>
    </textarea>
<div className='input-icons'>
    <img src='/circle.svg'></img>
    <img src='/bubble.svg'></img>
    

</div>
    
</div>
<div className='communityEntries'>
    <div className='pLogo'> 
    <h4> Popular Questions</h4>
    </div>
    <div className='entries' id='entries'>
    <h5>How hard is csce 3600?</h5>
    <h5>Should I take doran for csce 4010?</h5>
    <h5>Should I take doran for csce 4010?</h5>
    </div>
</div>
</div>
</>




)

}