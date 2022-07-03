import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Card,Col,Row,Button,Form,Badge } from "react-bootstrap";
import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { FaMapMarker} from "react-icons/fa";
import {BsTelephoneFill} from "react-icons/bs";
import {MdEmail} from "react-icons/md";
import {BsLinkedin} from "react-icons/bs";
import "../assets/style.css"

function Resume(){
const [titledata,settitledata]=useState({
    name:'Archit Sorathiya',
    role:'Software Developer',
    place:"Ahemedabad,Gujarat",
    contact:"7600477039",
    email:"architsorathiya@softqubes.com",
    handle:`www.abc.com`,
})
const [titleEdit,settitleEdit]=useState(false);

function changetitle(e){
   settitleEdit(!titleEdit);
   console.log(titleEdit)
}

function changetitledata(e){
    e.preventDefault();
    settitledata({...titledata,[e.target.name]:e.target.value})
}

const [iseducationedit,setiseducationedit]=useState(false)
const [educationdata,seteducationdata]=useState({
   
        mscourse:"M.S in Computer Science",
        msuniversity:"University Of Pittsburgh",
        msduration:"April 2019 - June 2021",
        msresult:"CGPA - 9.2",
    
 
        bscourse:"B.S in Computer Science",
        bsuniversity:"University Of Pittsburgh",
        bsduration:"August 2015 - February 2019",
        bsresult:"CGPA - 8.56",
    
   
        schoolcourse:"Class XII (Science)",
        schooluniversity:"Charles High School",
        schoolduration:"August 2013 - June 2015",
        schoolresult:"Percentage - 88.5",
    
})

function changeeducationdata(e){
    e.preventDefault();
    seteducationdata({...educationdata,[e.target.name]:e.target.value
    
})
}

const [isprojectedit,setisprojectedit]=useState(false);
const [projectdata,setprojectdata]=useState({
  p1title:"Virtual Mine Lab Development",
  p1description:"Content was created for simulation to develop virtual lab which gives opportunity to learn experiments online.",
  p2title:"Investigation of Correlation between Rock Seismic Wave Velocity and Other Rock Physio-Mechanical Properties",
  p2description:"Finding the seismic wave velocity in rock sample and relating it affect on various properties of that sample.",
  p3title:"Determination of Life Quality Index of a State",
  p3description:"Economics Project Collecting data like income, health and mortality records of a state and calculated the index."
});

function changeprojectdata(e){
  setprojectdata({...projectdata,[e.target.name]:e.target.value})
}

const printPDF = () => {
  const domElement = document.getElementById("tobeprint");
  html2canvas(domElement, {
    onclone: document => {
      document.getElementById("print").style.visibility = "hidden";
      document.getElementById("remove").style.visibility="hidden"
      document.getElementById("remove2").style.visibility="hidden"
      document.getElementById("remove3").style.visibility="hidden"
      document.getElementById("remove4").style.visibility="hidden"
      document.getElementById("remove5").style.visibility="hidden"
      document.getElementById("remove6").style.visibility="hidden"
      document.getElementById("remove7").style.visibility="hidden"
    }
  }).then(canvas => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    pdf.addImage(imgData, "SVG", 8, 8);
    pdf.save(`${new Date().toISOString()}.pdf`);
  });
};

const [isskilledit,setisskilledit]=useState(false);
const [skilldata,setskilldata]=useState(["","JS","Py"]);

function changeskilldata(e){
  e.preventDefault();
  var newskill = [...skilldata] //copy the array
  console.log(newskill)
newskill[e.target.id] = e.target.value //execute the manipulations
setskilldata(newskill) //set the new state

}
 
const [skilladdition,setskilladdition]=useState("");

function changeskilladdition(e){
  setskilladdition(e.target.value);
}
function addskilltab(e){
  e.preventDefault();
    if(skilladdition===""){
      alert("enter data");
    }else{
          var s= [...skilldata];
          s.push(skilladdition);
          setskilldata(s);  
          setskilladdition("")  
    }
}


function deleteskilltab(e){
  e.preventDefault();
  var d= [...skilldata];
  d.splice(-1)
  setskilldata(d);
}
var t=0; 

const [coursedata,setcoursedata]=useState(["","Introduction to MySQL","Basic Web Development"])
const [iscourseedit,setiscourseedit]=useState(false);
const [courseaddition,setcourseaddition]=useState("")
var c=0;

function changecoursedata(e){
  e.preventDefault();
  var newcourse = [...coursedata] //copy the array
  console.log(coursedata)
newcourse[e.target.id] = e.target.value //execute the manipulations
setcoursedata(newcourse) //set the new state
}

function changecourseaddition(e){
   setcourseaddition(e.target.value);
}
function addcoursetab(e){
  e.preventDefault();
  if(courseaddition===""){
    alert("enter data");
  }else{
        var s= [...coursedata];
        s.push(courseaddition);
        setcoursedata(s);  
        setcourseaddition("")  
  }
}
function deletecoursetab(e){
  e.preventDefault()
  var d= [...coursedata];
  d.splice(-1)
  setcoursedata(d);
}

const [pordata, setpordata]=useState({
  job1:"Joint Secretary at SME",
  role1:"Organizing and scheduling various SME events, actingas a link between participants from all over India and my college.",
  job2:"Associate Coordinator at Enginner Tech Fest",
  role2:"I was a single point of contact between the organizing team and students that take part in the various events"
});
const [isporedit,setisporedit]=useState(false);

function changepordata(e){
  setpordata({...pordata,[e.target.name]:e.target.value})
}

const [achievementdata,setachievementdata]=useState(["","Best student award in High School","1st prize in General Knowledge competition"]);
const [isachievementedit,setisachievementedit]=useState(false);
const [achievementaddition,setachievementaddition]=useState("")

function changeachievementdata(e){
  e.preventDefault()
  var newachievement = [...achievementdata] //copy the array
  console.log(achievementdata)
newachievement[e.target.id] = e.target.value //execute the manipulations
setachievementdata(newachievement) //set the new state
}

function changeachievementaddition(e){
  e.preventDefault();
  setachievementaddition(e.target.value)
}

function addachievementtab(e){
  e.preventDefault();
  if(achievementaddition===""){
    alert("enter data");
  }else{
        var s= [...achievementdata];
        s.push(achievementaddition);
        setachievementdata(s);  
        setachievementaddition("")  
  }
}

function deleteachievementtab(e){
  e.preventDefault();
  var d= [...achievementdata];
  d.splice(-1)
  setachievementdata(d);
}


  return(
      <div>
      <Container>
          <Row style={{marginBottom:"10px"}}>
              <Col md={4} lg={4}>
                   {
                       titleEdit?
                       <Form style={{border:"3px solid lightgrey" ,borderRadius:"7px", padding:"20px",paddingLeft:"40px",marginTop:"10px"}}>
                          <h4>Header Detail</h4>
                       <fieldset>
                         <Form.Group className="mb-3">
                           <Form.Label>Name</Form.Label>
                           <Form.Control name="name" value={titledata.name} onChange={(e)=>changetitledata(e)} />
                         </Form.Group>
                         <Form.Group className="mb-3">
                           <Form.Label>Profession</Form.Label>
                           <Form.Control name="role" value={titledata.role} onChange={(e)=>changetitledata(e)} />
                         </Form.Group>
                         <Form.Group className="mb-3">
                           <Form.Label>Location</Form.Label>
                           <Form.Control name="place" value={titledata.place} onChange={(e)=>changetitledata(e)} />
                         </Form.Group>
                         <Form.Group className="mb-3">
                           <Form.Label>Contact No.</Form.Label>
                           <Form.Control name="contact" value={titledata.contact} onChange={(e)=>changetitledata(e)} />
                         </Form.Group>
                         <Form.Group className="mb-3">
                           <Form.Label>Email id</Form.Label>
                           <Form.Control name="email" value={titledata.email} onChange={(e)=>changetitledata(e)} />
                         </Form.Group>
                         <Form.Group className="mb-3">
                           <Form.Label>Linkdin handle</Form.Label>
                           <Form.Control name="handle" value={titledata.handle} onChange={(e)=>changetitledata(e)} />
                         </Form.Group>
                         
                         <Button type="submit" onClick={()=>settitleEdit(false)}>Submit</Button>
                       </fieldset>
                     </Form>:
                       <form>

                       </form>
                   }

                   {
                       iseducationedit?
                       <Form style={{border:"3px solid lightgrey" ,borderRadius:"7px", padding:"20px",paddingLeft:"40px",marginTop:"5px"}}>
                            <h4>Education</h4>
                       <fieldset>
                         <Form.Group className="mb-3">
                           <Form.Label>Course</Form.Label>
                           <Form.Control id="1" name="mscourse" value={educationdata.mscourse} onChange={(e)=>changeeducationdata(e)} />
                         </Form.Group>
                         <Form.Group className="mb-3">
                           <Form.Label>university/college</Form.Label>
                           <Form.Control id="2" name="msuniversity" value={educationdata.msuniversity} onChange={(e)=>changeeducationdata(e)} />
                         </Form.Group>
                         <Form.Group className="mb-3">
                           <Form.Label>Duration</Form.Label>
                           <Form.Control id="3" name="msduration" value={educationdata.msduration} onChange={(e)=>changeeducationdata(e)} />
                         </Form.Group>
                         <Form.Group className="mb-3">
                           <Form.Label>Result</Form.Label>
                           <Form.Control id="4" name="msresult" value={educationdata.msresult} onChange={(e)=>changeeducationdata(e)} />
                         </Form.Group>

                         <Form.Group className="mb-3">
                           <Form.Label>Course</Form.Label>
                           <Form.Control id="5" name="bscourse" value={educationdata.bscourse} onChange={(e)=>changeeducationdata(e)} />
                         </Form.Group>
                         <Form.Group className="mb-3">
                           <Form.Label>university/college</Form.Label>
                           <Form.Control id="6" name="bsuniversity" value={educationdata.bsuniversity} onChange={(e)=>changeeducationdata(e)} />
                         </Form.Group>
                         <Form.Group className="mb-3">
                           <Form.Label>Duration</Form.Label>
                           <Form.Control id="7" name="bsduration" value={educationdata.bsduration} onChange={(e)=>changeeducationdata(e)} />
                         </Form.Group>
                         <Form.Group className="mb-3">
                           <Form.Label>Result</Form.Label>
                           <Form.Control id="8" name="bsresult" value={educationdata.bsresult} onChange={(e)=>changeeducationdata(e)} />
                         </Form.Group>

                         <Form.Group className="mb-3">
                           <Form.Label>Course</Form.Label>
                           <Form.Control id="9" name="schoolcourse" value={educationdata.schoolcourse} onChange={(e)=>changeeducationdata(e)} />
                         </Form.Group>
                         <Form.Group className="mb-3">
                           <Form.Label>university/college</Form.Label>
                           <Form.Control id="10" name="schooluniversity" value={educationdata.schooluniversity} onChange={(e)=>changeeducationdata(e)} />
                         </Form.Group>
                         <Form.Group className="mb-3">
                           <Form.Label>Duration</Form.Label>
                           <Form.Control id="11" name="schoolduration" value={educationdata.schoolduration} onChange={(e)=>changeeducationdata(e)} />
                         </Form.Group>
                         <Form.Group className="mb-3">
                           <Form.Label>Result</Form.Label>
                           <Form.Control id="12" name="schoolresult" value={educationdata.schoolresult} onChange={(e)=>changeeducationdata(e)} />
                         </Form.Group>
                         
                         <Button type="submit" onClick={()=>setiseducationedit(false)}>Submit</Button>
                       </fieldset>
                     </Form>:
                     <Form>

                     </Form>

                   }

                   {
                     isprojectedit?
                     <Form style={{border:"3px solid lightgrey" ,borderRadius:"7px", padding:"20px",paddingLeft:"40px",marginTop:"5px"}}>
                       <h4>Project Detail</h4>
                      <fieldset>
                         <Form.Group className="mb-3">
                           <Form.Label>Project Title</Form.Label>
                           <Form.Control name="p1title" value={projectdata.p1title} onChange={(e)=>changeprojectdata(e)} />
                         </Form.Group>
                         <Form.Group className="mb-3">
                           <Form.Label>Project description</Form.Label>
                           <Form.Control name="p1description" value={projectdata.p1description} onChange={(e)=>changeprojectdata(e)} />
                         </Form.Group>
                         <Form.Group className="mb-3">
                           <Form.Label>Project Title</Form.Label>
                           <Form.Control name="p2title" value={projectdata.p2title} onChange={(e)=>changeprojectdata(e)} />
                         </Form.Group>
                         <Form.Group className="mb-3">
                           <Form.Label>Project description</Form.Label>
                           <Form.Control name="p2description" value={projectdata.p2description} onChange={(e)=>changeprojectdata(e)} />
                         </Form.Group>
                         <Form.Group className="mb-3">
                           <Form.Label>Project Title</Form.Label>
                           <Form.Control name="p3title" value={projectdata.p3title} onChange={(e)=>changeprojectdata(e)} />
                         </Form.Group>
                         <Form.Group className="mb-3">
                           <Form.Label>Project description</Form.Label>
                           <Form.Control name="p3description" value={projectdata.p3description} onChange={(e)=>changeprojectdata(e)} />
                         </Form.Group>
                         <Button type="submit" onClick={()=>setisprojectedit(false)}>Submit</Button>
                         </fieldset>
                     </Form>:<Form>

                     </Form>
                   }

                   {
                     isskilledit?
                     <Form style={{border:"3px solid lightgrey" ,borderRadius:"7px", padding:"20px",paddingLeft:"40px",marginTop:"5px"}}>
                       <h4>Skill</h4>
                       <fieldset>
                       <Form.Group className="mb-3">
                       {
                         skilldata.map((v)=>(
                           <div key={t++} >
                             {console.log(skilldata.indexOf(v))}
                          <Form.Control  style={{marginBottom:"5px"}} placeholder="enter skill" id={skilldata.indexOf(v)} value={v} onChange={(e)=>changeskilldata(e)} />
                          </div>
                         
                         ))
                       }
                       
                       <button className="btn btn-danger" onClick={(e)=>deleteskilltab(e)}>Remove</button>
                        </Form.Group>
                        
                          
                        
                            <Form.Group><h4>Add skill</h4>
                              <Form.Control  style={{marginBottom:"5px"}} placeholder="enter skill" id="skilltab" value={skilladdition} onChange={(e)=>changeskilladdition(e)} />
                              <button className="btn btn-success" style={{marginTop:"5px",marginBottom:"5px"}} onClick={(e)=>addskilltab(e)}>Add Skills</button>
                            </Form.Group>
                        
                      
                        <button className="btn btn-primary" onClick={()=>setisskilledit(false)}>submit</button>
                       </fieldset>

                     </Form>:<Form>

                     </Form>
                   }

                   {
                     iscourseedit?
                     <Form style={{border:"3px solid lightgrey" ,borderRadius:"7px", padding:"20px",paddingLeft:"40px",marginTop:"5px"}}>
                     <h4>Courses</h4>
                     <fieldset>
                       <Form.Group className="mb-3">
                         {
                           coursedata.map((v)=>(
                            <div key={c++} >
                              {console.log(coursedata.indexOf(v))}
                           <Form.Control  style={{marginBottom:"5px"}} placeholder="enter course" id={coursedata.indexOf(v)} value={v} onChange={(e)=>changecoursedata(e)} />
                           </div>
                          
                          ))

                         }
                        <button className="btn btn-danger" onClick={(e)=>deletecoursetab(e)}>Remove</button>
                       </Form.Group>
                       <Form.Group><h4>Add Course</h4>
                              <Form.Control  style={{marginBottom:"5px"}} placeholder="enter course" id="coursetab" value={courseaddition} onChange={(e)=>changecourseaddition(e)} />
                              <button className="btn btn-success" style={{marginTop:"5px",marginBottom:"5px"}} onClick={(e)=>addcoursetab(e)}>Add course</button>
                            </Form.Group>
                      <button className="btn btn-primary" onClick={()=>setiscourseedit(false)}>submit</button>
                     </fieldset>
                     </Form>:<Form>

                     </Form>
                   }
                   {
                     isporedit?
                     <Form style={{border:"3px solid lightgrey" ,borderRadius:"7px", padding:"20px",paddingLeft:"40px",marginTop:"5px"}}>
                       <h4>Internship/Job</h4>
                       <fieldset>
                         
                         <Form.Group className="mb-3">
                           <Form.Label>Job/Internship</Form.Label>
                           <Form.Control name="job1" value={pordata.job1} onChange={(e)=>changepordata(e)} />
                         </Form.Group>
                         <Form.Group className="mb-3">
                           <Form.Label>Role</Form.Label>
                           <Form.Control name="role1" value={pordata.role1} onChange={(e)=>changepordata(e)} />
                         </Form.Group>
                         <Form.Group className="mb-3">
                           <Form.Label>Job/Internship</Form.Label>
                           <Form.Control name="job2" value={pordata.job2} onChange={(e)=>changepordata(e)} />
                         </Form.Group>
                         <Form.Group className="mb-3">
                           <Form.Label>Role</Form.Label>
                           <Form.Control name="role2" value={pordata.role2} onChange={(e)=>changepordata(e)} />
                         </Form.Group>
                        <Button onClick={()=>setisporedit(!isporedit)}>Submit</Button>
                       </fieldset>
                     </Form>:<Form>

                     </Form>
                   }

                   {
                     isachievementedit?
                     <Form style={{border:"3px solid lightgrey" ,borderRadius:"7px", padding:"20px",paddingLeft:"40px",marginTop:"5px"}}>
                       <fieldset>
                       <Form.Group className="mb-3">
                         {
                           achievementdata.map((v)=>(
                            <div key={c++} >
                              {console.log(achievementdata.indexOf(v))}
                           <Form.Control  style={{marginBottom:"5px"}} placeholder="enter course" id={achievementdata.indexOf(v)} value={v} onChange={(e)=>changeachievementdata(e)} />
                           </div>
                          
                          ))

                         }
                         <button className="btn btn-danger" onClick={(e)=>deleteachievementtab(e)}>Remove</button>
                         </Form.Group>
                         <Form.Group><h4>Add Achievement</h4>
                              <Form.Control  style={{marginBottom:"5px"}} placeholder="enter achievement" id="achievementtab" value={achievementaddition} onChange={(e)=>changeachievementaddition(e)} />
                              <button className="btn btn-success" style={{marginTop:"5px",marginBottom:"5px"}} onClick={(e)=>addachievementtab(e)}>Add Achievement</button>
                            </Form.Group>
                            <button className="btn btn-primary" onClick={()=>setisachievementedit(false)}>submit</button>
                       </fieldset>
                     </Form>:<Form>

                     </Form>
                   }
              </Col>
              <Col md={8} lg={8}>
              <button style={{marginTop:"10px",marginBottom:"10px",marginLeft:"50%"}} className="btn btn-success" id="print" onClick={printPDF}>Download</button>
              <Card   style={{ width: '100%', border:'1px solid grey'}}>
                <Card.Body id="tobeprint">
                <button id="remove" className='btn btn-primary' onClick={(e)=>changetitle(e)} style={{float:'right'}}>Edit</button>
                    <Card.Title><h2 >{titledata.name}</h2></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" style={{fontSize:"20px"}}>{titledata.role}</Card.Subtitle>
                    
                    <div> 
                      <span> <FaMapMarker/>{titledata.place}</span>
                      <span style={{marginLeft:"25px"}}><BsTelephoneFill/> {titledata.contact}</span>
                      <span style={{marginLeft:"25px"}}><MdEmail/>{titledata.email}</span>
                      <div><BsLinkedin/>{`${titledata.handle}`}</div>
                    </div>
                    <br/>
                    
                <Card.Text>
            <Row>
                <Col lg={6}>
                  <div>
                    <button id="remove2" className='btn btn-primary' onClick={()=>setiseducationedit(!iseducationedit)} style={{float:'right'}}>Edit</button>
                    <h4>Education</h4>
                    
                     <hr/>
                     <div>
                     <div>{educationdata.mscourse}</div>
                     <div><h5>{educationdata.msuniversity}</h5></div>
                     <div className='mt-0'>{educationdata.msduration}</div>
                     <div >{educationdata.msresult}</div>
                     </div>
                     <br/>

                     <div>
                     <div>{educationdata.bscourse}</div>
                     <div><h5>{educationdata.bsuniversity}</h5></div>
                     <div className='mt-0'>{educationdata.bsduration}</div>
                     <div >{educationdata.bsresult}</div>
                     </div>
                     <br/>

                     <div>
                     <div>{educationdata.schoolcourse}</div>
                     <div><h5>{educationdata.schooluniversity}</h5></div>
                     <div className='mt-0'>{educationdata.schoolduration}</div>
                     <div >{educationdata.schoolresult}</div>
                     </div>
                </div>
                     <br/>
                    
                    <div>
                      <button id="remove3" className="btn btn-primary" style={{float:'right'}}  onClick={()=>setisprojectedit(!isprojectedit)}>Edit</button>
                       <h4>Projects</h4>
                       <hr/>
                       <div>
                         <div style={{fontSize:'18px' ,fontWeight:"550"}}>{projectdata.p1title}</div>
                         <div className='lead' style={{fontSize:'16px',fontWeight:"400"}}>{projectdata.p1description}</div>
                      </div>
                      <div className="mt-3">
                         <div style={{fontSize:'18px',fontWeight:"550"}} >{projectdata.p2title}</div>
                         <div className='lead' style={{fontSize:'15px',fontWeight:"400"}}>{projectdata.p2description}</div>
                      </div>
                      <div className="mt-3">
                         <div style={{fontSize:'18px',fontWeight:"550"}} >{projectdata.p3title}</div>
                         <div className='lead' style={{fontSize:'15px',fontWeight:"400"}}>{projectdata.p3description}</div>
                      </div>
                        
                     </div>
                </Col>

                <Col lg={6}>
                    <div style={{marginLeft:"30px"}}>
                      <button id="remove4" className="btn btn-primary" style={{float:"right"}} onClick={()=>setisskilledit(!isskilledit)}>Edit</button>
                      <h4>Skills/Tech Known</h4>
                      <hr/>
                      {
                        skilldata.map((s)=>(
                          <Badge bg="secondary" style={{padding:"10px" ,fontSize:"14px", marginLeft:"5px", marginBottom:"5px"}}>{s}</Badge>
                        ))
                      }
                      

                    </div>
                    <br/>
                    <div style={{marginLeft:"30px"}}>
                    <button id="remove5" className="btn btn-primary" style={{float:"right"}} onClick={()=>setiscourseedit(!iscourseedit)}>Edit</button>
                      <h4>Courses</h4>
                      <hr/>
                      {
                        coursedata.map((s)=>(
                          <div class="d" >
                            <div class="abc"></div>
                              <div>{s}</div>  
                          </div>
                          // <ul style={{listStylePosition:"none",marginLeft:"0px",fontWeight:'400'}}><li>{s}</li></ul>
                        ))
                      }
                    </div>
                    <br/>

                    <div style={{marginLeft:"30px"}}>
                    <button id="remove6" className="btn btn-primary" style={{float:"right"}} onClick={()=>setisporedit(!isporedit)}>Edit</button>
                      <h4>Intership/Jobs done</h4>
                      <hr/>
                      <div>
                         <div style={{fontSize:'18px',fontWeight:"550"}} >{pordata.job1}</div>
                         <div className='lead' style={{fontSize:'15px',fontWeight:"400"}}>{pordata.role1}</div>
                      </div>
                      <div className="mt-3">
                         <div style={{fontSize:'18px',fontWeight:"550"}} >{pordata.job2}</div>
                         <div className='lead' style={{fontSize:'15px',fontWeight:"400"}}>{pordata.role2}</div>
                      </div>
                    </div>
                    <br/>

                    <div style={{marginLeft:"30px"}}>
                    <button id="remove7" className="btn btn-primary" style={{float:"right"}} onClick={()=>setisachievementedit(!isachievementedit)}>Edit</button>
                       <h4>Achievements</h4>
                       <hr/>
                       {
                         achievementdata.map((s)=>(
                          <div class="d" >
                          <div class="abc"></div>
                            <div>{s}</div>  
                        </div>
                          //  <ul><li>{s}</li></ul>
                         ))
                       }
                    </div>
                </Col>
                 
                </Row>
                    
                    </Card.Text>
                    
                </Card.Body>

                </Card>
                
              </Col>
          </Row>
      </Container>
      </div>
  )

}
export default Resume;