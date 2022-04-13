import React from "react"
import Accordion from 'react-bootstrap/Accordion'
import Card from "react-bootstrap/Card"
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, (e)=>{
        e.preventDefault()
    })
  
    return (
      <div
        id="resources-cursor"
        onClick={decoratedOnClick}>
            {children}
      </div>
    );
  }

const Resources = () => {
    return (
        <main>
            <section className="resources-accordion">
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header className="back-color">
                            <CustomToggle eventKey="0"> Ferret Facts </CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <ul>
                                    <li>Ferrets are a member of the weasel family</li>
                                    <li>They can weigh between one and a half and five pounds as adults</li>
                                    <li>Their average lifespan is 6-10 years but can live much longer</li>
                                    <li>They sleep a lot — 18 to 20 hours a day — and are most active in the early morning and evening</li>
                                    <li>The name "ferret" is derived from the Latin furittus, meaning "little thief"</li>
                                    <li>They definitely love to steal, but with proper care, ferrets only have a slight scent when your face is near their fur</li>
                                    <li>A group of ferrets is known as a business</li>
                                    <li>Males are called hobs; females are jills, and babies are called kits</li>
                                </ul>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card>
                        <Card.Header className="back-color">
                            <CustomToggle eventKey="1"> Life with Ferrets </CustomToggle>
                        </Card.Header>

                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <ul>
                                    <li>Ferrets have a friendly, playful and energetic nature, enjoy being around people and love attention</li>
                                    <li>Ferrets are social animals and thrive more with other ferrets or from plenty of attention from their owners</li>
                                    <li>They get depressed if they are alone for long periods of time; that's why we say they always come in twos</li>
                                    <li>Ferrets are very intelligent and can be trained to do all kinds of tricks</li>
                                    <li>They can be trained to use a litter box, but accidents should be expected as some are harder to train then others</li>
                                    <li>They metabolize food pretty quickly so they poop more than cats and dogs.</li>
                                    <li>Be prepared!</li>
                                    <li>And most importantly<br /><span>Bored ferrets are destructive ferrets!</span></li>
                                </ul>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card>
                        <Card.Header className="back-color">
                            <CustomToggle eventKey="2">  Health Issues and Preventative Care </CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                <ul>
                                    <li>Ferrets are prone to many illnesses like Insulinoma, Adrenal disease, heart disease, among others</li>
                                    <li>Catching the illnesses early helps with mitigating their symptoms</li>
                                    <li>Young Ferrets need annual exams, but older ferrets, 3+, might need an exam every 6 months</li>
                                    <li>Annual vaccines against canine distemper and rabies</li>
                                    <li>Trimming nails every 2 weeks and cleaning ears every month</li>
                                    <li>Older ferrets need blood tests every year or six months to test blood sugar and for other ailments</li>
                                    <li>Ferrets are strong and can hide illnesses so preventative care is crucial for a healthy life</li>
                                    <li>Adrenal gland disease can also occur in ferrets over two and the cause is unknown.
                                        <br />
                                        <a href="https://www.petmd.com/ferret/conditions/endocrine/c_ft_adrenal_disease">Find out more here.</a></li>
                                    <li>Ferrets are susceptible to insulinoma, which are tumors on the pancreas that overproduce insulin
                                        <br />
                                        <a href="https://www.vetbabble.com/small-pets/ferrets/insulinomas-ferrets-causes-treatment/">Find out more here.</a></li>
                                </ul>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </section>

            <section>
                <h4>Ferrets are worth the effort:</h4>
                <div className="embed-responsive embed-responsive-4by3 resources-video">
                    <iframe title="Ferrets are worth the effort" className="embed-responsive-item" src="https://www.youtube.com/embed/ohPcA27fHAE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>
        </main>
    )
}

export default Resources