import logo from './logo.svg';
import './App.css';


function App() {
  var quote = "";
  var array_of_quote = [
    "“Always try to be a rainbow in someone’s cloud”",
    "“Share what you read with your friends.”",
    "“All you can do is to use it right.”",
    "“As you know, every coin has two sides, so does the technology Therefore, technology can help you, also can destroy you.”",
    "“Stone Age. Bronze Age. Iron Age. We define entire epics of humanity by the technology they use.”— Reed Hastings",
    "“Study hard so that you can master technology, which allows us to master nature.”— Che Guevara",
    "“Technological progress has merely provided us with more efficient means for going backwards.”— Aldous Huxley",
    "“Technology frightens me to death. It’s designed by engineers to impress other engineers. And they always come with instruction booklets that are written by engineers for other engineers — which is why almost no technology ever works.”—John Cleese",
    "“Technology gives us power, but it does not and cannot tell us how to use that power. Thanks to technology, we can instantly communicate across the world, but it still doesn’t help us know what to say. ”— Jonathan Sacks",
    "“Technology has to be invented or adopted.”— Jared Diamond",
    "“Technology is a useful servant but a dangerous master.”— Christian Lous Lange",
    "“Technology is a word that describes something that doesn’t work yet.”— Douglas Adams",
    "“Technology is anything that wasn’t around when you were born. ”— Alan Kay",
    "“Technology is cool, but you’ve got to use it as opposed to letting it use you.”— Prince",
    "“Technology is so much fun but we can drown in our technology. The fog of information can drive out knowledge.”—Daniel J. Boorstin",
    "“Technology is teaching us to be human again.”— Simon Mainwaring",
    "“Technology is the campfire around which we tell our stories.”— Laurie Anderson",
    "“Technology is the foundation of the empowerment economy.”— Elise Stefanik",
    "“Technology is unlocking the innate compassion we have for our fellow human beings.”—Bill Gates",
    "“Technology itself is neither good nor bad. People are good or bad. ”—Naveen Jain",
    "“Technology made large populations possible; large populations now make technology indispensable.”—Joseph Wood Krutch",
    "“Technology presumes there’s just one right way to do things and there never is.”— Robert M. Pirsig",
    "“Technology, through automation and artificial intelligence, is definitely one of the most disruptive sources. ”— Alain Dehaze",
    "“Technology… is a queer thing. It brings you great gifts with one hand, and it stabs you in the back with the other. ”— Carrie Snow",
    "“Technology… the knack of so arranging the world that we don’t have to experience it.”— Max Frisch",
    "“The art challenges the technology, and the technology inspires the art. ”— John Lasseter",
    "“The film industry brings people together, and so does technology. I see them as similar platforms.”— Ashton Kutcher",
    "“The good thing about science is that it’s true whether or not you believe in it. ”— Neil deGrasse Tyson",
    "“The great myth of our times is that technology is communication. ”—Libby Larsen",
    "“The greatest achievement of humanity is not its works of art, science, or technology, but the recognition of its own dysfunction. ”— Eckhart Tolle",
    "“The human spirit must prevail over technology. ”— Albert Einstein",
    "“The most technologically efficient machine that man has ever invented is the book.”— Northrop Frye",
    "“The real danger is not that computers will begin to think like men, but that men will begin to think like computers.”— Sydney J. Harris ",
    "“The real problem is not whether machines think but whether men do. ”—B.F. Skinner",
    "“The saddest aspect of life right now is that gathers knowledge faster than society gathers wisdom.”— Isaac Asimov ",
    "“The science of today is the technology of tomorrow.”— Edward Teller",
    "“The ultimate promise of technology is to make us master of a world that we command by the push of a button.”— Volker Grassmuck",
    "“The world won’t care about your self-esteem. The world will expect you to accomplish something BEFORE you feel good about yourself.”—Bill Gates",
    "“There is no law except the law that there is no law.” — John Archibald Wheeler",
    "“This is why I loved technology: if you used it right, it could give you power and privacy.”—Cory Doctorow ",
    "“To master a new technology, you have to play with it. ”—Jordan Peterson",
    "“TV and the Internet are good because they keep stupid people from spending too much time out in public.”—Douglas Coupland ",
    "“Two things are infinite: the universe and human stupidity; and I’m not sure about the universe.”— Albert Einstein ",
    "“We are stuck with technology when what we really want is just stuff that works.”—Douglas Adams",
    "“We have to stop optimizing for programmers and start optimizing for users. ”—Jeff Atwood",
    "“While technology is important, it’s what we do with it that truly matters.” — Muhammad Yunus",
    "“You can’t just ask customers what they want and then try to give that to them. By the time you get it built, they’ll want something new.” — Steve Jobs ",
    "“You cannot teach a man anything; you can only help him discover it in himself.”— Galileo",
    "“You have to learn how to harness technology so you can use it for positive stuff without being disconnected from nature.” — Talib Kweli ",
    "“A man who dares to waste one hour of time has not discovered the value of life.”— Charles Darwin",
    "“All of our technology is completely unnecessary to a happy life.”— Tom Hodgkinso",
    "“All this modern technology just makes people try to do everything at once. ”— Bill Watterson",
    "“Any sufficiently advanced technology is equivalent to magic.”— Sir Arthur C. Clarke ",
    "“Books may look like nothing more than words on a page, but they are actually an infinitely complex imaginotransference technology that translates odd, inky squiggles into pictures inside your head.”— Jasper Fforde",
    "“Communications tools don’t get socially interesting until they get technologically boring.”— Clay Shirky",
    "“Computers are like bikinis. They save people a lot of guesswork.”— Sam Ewing",
    "“Computers are useless. They can only give you answers.”— Pablo Picasso",
    "“Especially in technology, we need revolutionary change, not incremental change.”— Larry Page",
    "“Ethics change with technology.”— Larry Niven",
    "“Even when you take a holiday from technology, technology doesn’t take a break from you.”— Douglas Coupland",
    "“Every aspect of human technology has a dark side, including the bow and arrow.”— Margaret Atwood",
    "“Everything is designed. Few things are designed well.”— Brian Reed",
    "“Life will be very hard without Technology today.”— Unknown",
    "“Getting information off the Internet is like taking a drink from a fire hydrant.”— Mitchell Kapor",
    "“Hardware: the parts of a computer that can be kicked.”— Jeff Pesis",
    "“Humanity is acquiring all the right technology for all the wrong reasons.”— R. Buckminster Fuller",
    "“I do not fear computers I fear lack of them.”— Isaac Asimov ",
    "“I have not failed. I’ve just found 10,000 ways that won’t work. ”— Thomas Edison",
    "“I think technology really increased human ability. But technology cannot produce compassion.”— Dalai Lama",
    "“I think that novels that leave out technology misrepresent life as badly as Victorians misrepresented life by leaving out sex.”— Kurt Vonnegut",
    "“I think there is a world market for maybe five computers. ”— Thomas Watson",
    "“If cats understood technology and had opposable thumbs, they’d rule the world.”― P.C. Cast, Awakened",
    "“If I have seen further it is by standing on the shoulders of Giants.”— Isaac Newton",
    "“If we continue to develop our technology without wisdom or prudence, our servant may prove to be our executioner.”— Omar N. Bradley",
    "“Information technology is at the core of how you do your business and how your business model itself evolves.”— Satya Nadella",
    "“It has become appallingly obvious that our technology has exceeded our humanity.”— Albert Einstein",
    "“It is strange that only extraordinary men make the discoveries, which later appear so easy and simple.”— Georg C. Lichtenberg",
    "“It’s supposed to be automatic, but actually you have to push this button.”—John Brunner",
    "“Just because something doesn’t do what you planned it to do doesn’t mean it’s useless.”— Thomas Edison",
    "“Never before in history has innovation offered promise of so much to so many in so short a time.”— Bill Gates",
    "“Never trust a computer you can’t throw out a window.”—Steve Wozniak",
    "“Once a new technology rolls over you, if you’re not part of the steamroller, you’re part of the road.”— Stewart Brand",
    "“One machine can do the work of fifty ordinary men. No machine can do the work of one extraordinary man.”— Elbert Hubbard",
    "“Programs must be written for people to read, and only incidentally for machines to execute.”— Harold Abelson",
    "“Science and technology revolutionize our lives, but memory, tradition and myth frame our response.”— Arthur M. Schlesinger",
    "“Science without religion is lame, religion without science is blind. ”— Albert Einstein",
    "“Simplicity is about subtracting the obvious and adding the meaningful.”—John Maeda",
    "“So much technology, so little talent.”— Vernor Vinge",
    "“If the wind will not serve, take to the oars.” –Latin Proverb",
    "“If you want to lift yourself up, lift up someone else.” –Booker T. Washington",
    "“You take your life in your own hands, and what happens? A terrible thing, no one to blame.” –Erica Jong",
    "“I didn’t fail the test. I just found 100 ways to do it wrong.” –Benjamin Franklin",
    "“In order to succeed, your desire for success should be greater than your fear of failure. ” –Bill Cosby",
    "“A person who never made a mistake never tried anything new.” – Albert Einstein",
    "“It is never too late to be what you might have been.” –George Eliot",
    "“I would rather die of passion than of boredom.” –Vincent van Gogh",
    "“Build your own dreams, or someone else will hire you to build theirs.” –Farrah Gray",
    "“You can’t use up creativity.  The more you use, the more you have.” –Maya Angelou",
    "“If you do what you’ve always done, you’ll get what you’ve always gotten.” –Tony Robbins",
    "“It’s not the years in your life that count. It’s the life in your years. –Abraham Lincoln"
  ]

  var random_fun = ()=>{
    var rand = 0;
    rand = Math.floor(Math.random()*100+0);
    // console.log(rand);
    // console.log("Clicked");
    // console.log(array_of_quote.length);
    quote = array_of_quote[rand];
    document.getElementById('quote').innerHTML =quote;
  }

  var h = 0;
  (function(){
    h = Number(window.innerHeight) - 426;
  })();
    
  return (
    <div id="main_div">
       <header>
           <h1>Random Quote Generator</h1> 
       </header>
       <div id="content">
       <button onClick={random_fun}>Generate Quote</button>
       <strong><i><p id="quote"></p></i></strong>
       </div>
 <footer id="foot" style={{marginTop:h+"px"}}>
  <div className="footer">
    Made with <span className="heart" style={{color:"rgb(231, 28, 62)"}}>  &#10084; </span> BY | SAQIB <br/>
    +91 95480 97513 <br/>
    mohdsaqibnavodaya@gmail.com
  </div>
</footer>

</div>
  );
}

export default App;