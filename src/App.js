import logo from './logo.svg';
import './App.css';
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount(){
    var classGender = document.getElementsByClassName('gen');
    var classNames = document.getElementsByClassName('nam');
    var classEmails = document.getElementsByClassName('email');
    
    
    var top_img = document.getElementById('top_img'); 
    var top_name = document.getElementById('top_name'); 
    var top_addr = document.getElementById('top_addr'); 
    var top_time = document.getElementById('top_time'); 
    var top_gen = document.getElementById('top_gen'); 
    
    var cart = document.getElementsByClassName('cart');


    var names = [];
    var gender = [];
    var emails = [];
    var Addresse = [];
    var timezone = [];
    var images = [];


    (async function getData(){
        var response = await fetch('https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20');
        var data = await response.json();
        for(let i = 0;i<data.results.length;i++){
             names.push(data.results[i].name.title+" "+data.results[i].name.first+" "+data.results[i].name.last);
             gender.push(data.results[i].gender);
             emails.push(data.results[i].email);
             Addresse.push(data.results[i].location.street.number+","+data.results[i].location.street.name+","+data.results[i].location.country+","+data.results[i].location.postcode);
             timezone.push(data.results[i].location.timezone.offset+"-"+data.results[i].location.timezone.description);
             images.push(data.results[i].picture.large);
             classNames[i].textContent = names[i];
             classGender[i].textContent = gender[i];
             classEmails[i].textContent = emails[i];
             top_img.src = images[0];
             top_name.textContent = names[0];
             top_gen.textContent = gender[0];
             top_addr.textContent = Addresse[0];
             top_time.textContent = timezone[0];
        }
    }());

    

    (function data(){
        for(let i = 0;i<20;i++){
            cart[i].addEventListener('click',()=>{

                top_img.src = images[i];
                top_name.textContent = names[i];
                top_gen.textContent = gender[i];
                top_addr.textContent = Addresse[i];
                top_time.textContent = timezone[i];
                cart[i].style.backgroundColor = '#A259FF';
                classGender[i].style.color = "white";
                cart[i].style.color = "white";
                classEmails[i].style.color = "white";
                for(let j = 0;j<20;j++){
                    if(j!=i){
                        classGender[j].style.color = "rgb(139, 139, 139)";
                        cart[j].style.color = "black";
                        classEmails[j].style.color = "#E16259";
                        cart[j].style.backgroundColor = "white";
                    }
                }
            })
        }

    }());

  }


  render() {
    return (
      <div>
        <div className="main_div">

          <div className="top">
                <div>
                  <h1 className="heading">Challenge</h1>
                </div>

              <div className="nav">
                  <nav className="nav1">Product</nav>
                  <nav className="nav2">Download</nav>
                  <nav className="nav3">Pricing</nav>
              </div>
          </div>



          <div className="about">
                <img className="img" id="top_img" src="https://randomuser.me/api/portraits/women/91.jpg" alt=""/>
                <div className="details">
                    <div className="name" id="top_name"> Mr. Duke Li Paul </div>
                    <div className="address" id="top_addr"> 345, Hilsgerg, Born Sidney, Netherland,12312 </div>
                    <div className="time" id="top_time">+3:00-Almanty, Dhaka, Columbo </div>
                    <div className="gender" id="top_gen">Female</div>
                </div>
          </div>



          <div className="carts">
              <div className="cart">
                  <div className="gen"></div>
                  <div className="nam">  </div>
                  <div className="email"></div>
              </div>
              <div className="cart">
                  <div className="gen"></div>
                  <div className="nam">  </div>
                  <div className="email"></div>
              </div>
              <div className="cart">
                  <div className="gen"></div>
                  <div className="nam">  </div>
                  <div className="email"></div>
              </div>
              <div className="cart">
                  <div className="gen"></div>
                  <div className="nam">  </div>
                  <div className="email"></div>
              </div>
              <div className="cart">
                  <div className="gen"></div>
                  <div className="nam">  </div>
                  <div className="email"></div>
              </div>
              <div className="cart">
                  <div className="gen"></div>
                  <div className="nam">  </div>
                  <div className="email"></div>
              </div>
              <div className="cart">
                  <div className="gen"></div>
                  <div className="nam">  </div>
                  <div className="email"></div>
              </div>
              <div className="cart">
                  <div className="gen"></div>
                  <div className="nam">  </div>
                  <div className="email"></div>
              </div>
              <div className="cart">
                  <div className="gen"></div>
                  <div className="nam">  </div>
                  <div className="email"></div>
              </div>
              <div className="cart">
                  <div className="gen"></div>
                  <div className="nam">  </div>
                  <div className="email"></div>
              </div>
              <div className="cart">
                  <div className="gen"></div>
                  <div className="nam">  </div>
                  <div className="email"></div>
              </div>
              <div className="cart">
                  <div className="gen"></div>
                  <div className="nam">  </div>
                  <div className="email"></div>
              </div>
              <div className="cart">
                  <div className="gen"></div>
                  <div className="nam">  </div>
                  <div className="email"></div>
              </div>
              <div className="cart">
                  <div className="gen"></div>
                  <div className="nam">  </div>
                  <div className="email"></div>
              </div>
              <div className="cart">
                  <div className="gen"></div>
                  <div className="nam">  </div>
                  <div className="email"></div>
              </div>
              <div className="cart">
                  <div className="gen"></div>
                  <div className="nam">  </div>
                  <div className="email"></div>
              </div>
              <div className="cart">
                  <div className="gen"></div>
                  <div className="nam">  </div>
                  <div className="email"></div>
              </div>
              <div className="cart">
                  <div className="gen"></div>
                  <div className="nam">  </div>
                  <div className="email"></div>
              </div>
              <div className="cart">
                  <div className="gen"></div>
                  <div className="nam">  </div>
                  <div className="email"></div>
              </div>
              <div className="cart">
                  <div className="gen"></div>
                  <div className="nam">  </div>
                  <div className="email"></div>
              </div>
            </div>

          </div>
          </div>
        );
  }
}

export default App;
