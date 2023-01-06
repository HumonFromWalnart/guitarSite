import React from 'react'
import { useNavigate } from 'react-router-dom'
import './welcomePage.css'

const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <div className='mercenaries'>
      <div className='navbar'>
        <div className='title'>WELCOME TO COPYRIGHT COLLECTION!</div>
        {/* <img src='https://i.imgflip.com/6ddcjt.png' id='pointing'></img> */}
        <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/27dbbda7-320b-488b-b8cb-6d993296f095/dehkxtv-65b4cdd6-0363-4984-8bbf-8f0ce23fb9da.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3ZGJiZGE3LTMyMGItNDg4Yi1iOGNiLTZkOTkzMjk2ZjA5NVwvZGVoa3h0di02NWI0Y2RkNi0wMzYzLTQ5ODQtOGJiZi04ZjBjZTIzZmI5ZGEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4K-UrtBdZlVu6gjov2lx1qEZn6qygf8Tzyb4a0N0RlA' id='soldier'></img>
        <div className='options'>
          <div id='signIn' onClick={() => navigate('/signUp')}>Sign Up</div>
          <div className='logInContainer'>
            <div id='logIn' onClick={() => navigate('/logIn')}>Log In</div>
            <div id='joiningBackText'>JOINING BACK?</div>
          </div>
        </div>
      </div>
      <div className='row'>
        <img src='https://media.tenor.com/Yq0UQn4NnY8AAAAM/scout-tf2.gif' id='gif'></img>
        <img src='https://media.tenor.com/4iZOTl1MZf0AAAAM/tf2-scout.gif' id='gif'></img>
        <img src='https://media3.giphy.com/media/IzdL5AH7teZSOPnqrw/giphy.gif' id='gif'></img>
        <img src='https://media.tenor.com/cYbLpua00UQAAAAM/tf2-blink.gif' id='gif'></img>
        <img src='https://media.tenor.com/K8HU6mbMRvUAAAAC/tf2-soldier-tf2.gif' id='gif'></img>
        <img src='https://media.tenor.com/AXvorCaRnb0AAAAd/tf2.gif' id='gif'></img>
        <img src='https://media.tenor.com/DIHsv2bJGx4AAAAM/tf2.gif' id='gif'></img>
        <img src='https://media.tenor.com/S-7yT1o8qXkAAAAd/tf2.gif' id='gif'></img>
        <img src='https://thumbs.gfycat.com/AnxiousImprobableLabradorretriever-max-1mb.gif' id='gif'></img>
        <img src='https://media.tenor.com/WDSOpqBaa34AAAAC/tf2-engineer.gif' id='gif'></img>
        <img src='https://media.tenor.com/HSFLCxTxFfYAAAAC/tf2-engineer.gif' id='gif'></img>
        <img src='https://i.gifer.com/NPry.gif' id='gif'></img>
        <img src='https://thumbs.gfycat.com/RegalNastyHoki-max-1mb.gif' id='gif'></img>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPCn45pzu8ivS4hBA9_7QcmaIVIElwowI8YA&usqp=CAU' id='gif'></img>
        <img src='https://media.tenor.com/w4UnHcPtaTcAAAAM/nope-no.gif' id='gif'></img>
        <img src='https://media.tenor.com/NuvfQJ16LGEAAAAd/tf2.gif' id='gif'></img>
      </div>
      {/* <div className='row'>
     
      </div> */}
      {/* <div className='row'>
        <img src='https://gifimage.net/wp-content/uploads/2018/11/team-fortress-2-animated-gif-6.gif' id='gif'></img>
        <img src='https://media.tenor.com/umIDDprKsTsAAAAd/soldier-tf2.gif' id='gif'></img>
      </div> */}


      {/* <img src='https://wiki.teamfortress.com/w/images/0/0e/Engineer%27s_Cap.png' id='engi'></img>
      <img src='https://i.redd.it/cl6dr5dwezr61.png' id='medi'></img>
      <img src='https://wiki.teamfortress.com/w/images/thumb/a/a2/Cheater%27s_Lament.png/500px-Cheater%27s_Lament.png' id='spy'></img>
      <img src='https://wiki.teamfortress.com/w/images/thumb/c/ce/Taunt_Didgeridrongo.png/250px-Taunt_Didgeridrongo.png' id='piss'></img>
      <img src='https://wiki.teamfortress.com/w/images/thumb/e/e5/Batter%27s_Helmet.png/250px-Batter%27s_Helmet.png' id='bonk'></img>
      <img src='https://wiki.teamfortress.com/w/images/thumb/8/8b/Execution.PNG/250px-Execution.PNG' id='pyro'></img>
      <img src='https://wiki.teamfortress.com/w/images/archive/5/58/20101019153012%21Heavy_Duty_Rag.png' id='heav'></img>
      <img src='https://www.pngmart.com/files/13/Team-Fortress-2-PNG-HD.png' id='sold'></img>
      <img src='https://wiki.teamfortress.com/w/images/thumb/4/41/Snapped_Pupil.png/250px-Snapped_Pupil.png' id='demo'></img> */}
    </div>

  )
}

export default WelcomePage;