import { Link } from "react-feather";
import { ArrowRight } from "react-feather";
import { PhoneCall } from "react-feather";
import { MapPin } from "react-feather";
function DonatePage() {
 
     const posts = [
    {
      title: "#1,000",
      snippet:
        "Can provide a girl with data access for a week",
    },
    {
      title: "#5,000",
      snippet:
      "Sponsors one girl through a full training"
    },
    {
      title: "#10,000",
      snippet:
        "Supports a laptop-sharing program",
    },
  ];
   return (
    <>
    <div className="page_cont"
    style={{
      padding:'0',
      margin:'0 auto',
      height:'auto',
      width:'100%',
      maxWidth:'1400px'
      // display:'block',
      // justifyContent:'center',
      // alignItems:'center'

    }}>

      <div
        className="text"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          maxWidth:'1400px',
          height: "100vh",
          backgroundImage: 'url("img/train.jpg")',
          backgroundSize:'cover',
          backgroundPosition:'center',

        }}
      >
        
        <h1
          style={{
            color: "rgb(248, 21, 97)",
            fontSize: "4rem",
            fontWeight: "800",
            fontFamily: "san-serif",
            textAlign: "center",
          }}
        >
          Help us build a better future... <br /> support a girl today!
        </h1>
      </div>


      <div className="story">
     
        <p  style={{
        marginBottom:'4rem',
        margin:'1rem 2rem',
        fontSize:'1.1rem'
      }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe eligendi eaque quis exercitationem, rerum quibusdam, sapiente fugit consequuntur ullam, repudiandae molestias sequi beatae quam nulla at cupiditate voluptas facilis quisquam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus beatae similique earum sed cumque placeat repudiandae ut qui, sunt, eaque magni reprehenderit repellendus distinctio fugit laboriosam quia eveniet culpa assumenda?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum minus delectus facilis maiores obcaecati earum quidem voluptatum ullam officia aspernatur nam asperiores, quod expedita, recusandae quaerat molestias placeat animi totam.

        </p>

        <h2 style={{
          color:'rgb(248, 21, 97)'
        }}>Choose how you'd like to give</h2>
      </div>
          
      <div
        style={{
          display: "grid",
          gap: "1.5rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          marginBottom:'2rem',
          padding:'1rem',
          margin:'0 2rem'
        }}
      >
           {posts.map((post, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              padding: "1.5rem",
              borderRadius: "10px",
              boxShadow: "2px 4px 8px rgba(80, 80, 80, 0.2)",
            }}
          >
            <h3 style={{ fontSize: "2.25rem", marginBottom: "1rem" }}>
              {post.title}
            </h3>
            <p style={{ color: "#555" , fontSize:'1.2rem'}}>{post.snippet}</p>
          </div>
        ))}
      </div>

      <div className="btn"
      style={{
        
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          marginBottom:'2rem'
      }}> 
          <button style={{
          width:'200px',
          height:'60px',
          borderRadius:'20px',
          backgroundColor:'rgb(248, 21, 97)',
          color:'white',
          fontSize:'1.2rem',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
        }} >Donate Now  <ArrowRight/> </button>
      </div>
        <div className="sponsor" style={{marginBottom:'3rem'}}>
      <p style={{
        textAlign:'center',
        fontFamily:"sans-serif"
      }}>You can give a <span style={{color:'rgb(248, 21, 97)',
        fontSize:'1.5rem',fontStyle:'italic'
      }}>One Time Gift</span> OR <span style={{color:'rgb(248, 21, 97)', fontSize:'1.5rem',fontStyle:'italic'}}>Choose to become a monthly sponsor</span> </p>


      <div className="transfer" style={{textAlign:'center',marginTop:'3rem', fontSize:'2rem'}}>
      <p>
        We accept Bank Transfers, Card Payments and USSD
      </p>
      </div>

      <div className="bank_details" style={{textAlign:'center', width:'100%',}}>
        <p> <strong>Bank Name:</strong> United Bank for Africa </p>
        <p> <strong>Account Number:</strong> 00******12 </p>
        <p> <strong>Account Name:</strong> Guru Innovation Account </p>
      </div>

    </div>
    </div>

      <div className="progress" style={{textAlign:'center',fontSize:'1.5rem',marginBottom:'1rem'}}>
        <h2>What your support has done so far</h2>

        <p>Trained <span style={{color:'rgb(248, 21, 97)',fontSize:'2rem',fontWeight:'700'}}>5,000+</span> girls in 3 Nigerian cities</p>
        <p><span style={{color:'rgb(248, 21, 97)',fontSize:'2rem',fontWeight:'700'}}>50+ </span>Laptops donated in 2024</p>
      </div>

      <div className="images" style={{width:'100%',maxWidth:'1400px',height:'auto',display:'flex',alignItems:'center', justifyContent:'space-evenly',gap:'20px',flexWrap:'wrap',marginBottom:'20px'}}>
        <img src="/img/teach.jpg" alt="girls in mentorship program" style={{width:'300px',borderRadius:'20px'}} />
        <img src="/img/train.jpg" alt="coders" style={{width:'300px',borderRadius:'20px'}} />
        <img src="/img/heropic.png" alt="" style={{width:'300px',borderRadius:'20px'}} />
        <img src="/img/girlsinpower1.jpg" alt="" style={{width:'300px',borderRadius:'20px',}}  />
      </div>

        <div className="contact_info" style={{textAlign:'center',fontSize:'1.2rem',marginBottom:'2rem'}}>
          <p style={{color:'rgb(248, 21, 97)',fontWeight:'600',fontSize:'2rem'}}>Got questions or want to donate in another way? <br /> Reach us at: </p>
          <p><strong> <MapPin/> Email:</strong> guruinnovationhub@gmail.com</p>
          <p><strong> <PhoneCall/> WhatsApp/Phone:</strong> 091*****091</p>
        </div>

        {/* <div className="faq" style={{textAlign:'center'}}>
          <h2>FAQ's</h2>
          <ul>
            <li>Can I donate in another way? Yes! we accept laptops, tech books,and snacks for events. </li>
            <li>How do i stay updated? Subscribe to our newsletter during or after donation. </li>
          </ul>
        </div> */}
    </>
  );
}
export default DonatePage;
