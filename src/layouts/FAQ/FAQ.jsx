import { Accordion, AccordionBody, AccordionHeader, Typography } from "@material-tailwind/react";
import { useState } from "react";
import book from '../../assets/book.png';
import Tilt from 'react-parallax-tilt';


const FrequentlyAskQuestions = () => {
    const [open, setOpen] = useState(1);
    const handleOpen = value => setOpen(value);
    return (
        <div className="bg-faq">
            <div className="bg-[#F1F2F4]/80">
                <div className="container lg:py-28">
                    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 items-center">
                        <Tilt>
                            <div>
                                <img className="opacity-90" src={book} alt="" />
                            </div>
                        </Tilt>
                        <div>
                            <Typography variant="h3">FAQ - Your Questions Answered</Typography>
                            <Accordion open={open === 1}>
                                <AccordionHeader onClick={() => handleOpen(1)}>Is GroupStudyHub free to use?</AccordionHeader>
                                <AccordionBody>
                                    <Typography>Yes, GroupStudyHub is completely free to use. We believe in making collaborative learning accessible to all students.</Typography>
                                </AccordionBody>
                            </Accordion>
                            <Accordion open={open === 2}>
                                <AccordionHeader onClick={() => handleOpen(2)}>How can I share study materials with my group members?</AccordionHeader>
                                <AccordionBody>
                                    <Typography>Uploading and sharing study materials is simple. Navigate to your Create assignment page, and upload your own assignment. Group members can then access the shared materials.</Typography>
                                </AccordionBody>
                            </Accordion>
                            <Accordion open={open === 3}>
                                <AccordionHeader onClick={() => handleOpen(3)}>{`Can I edit or update my assignment after I've submitted it?`}</AccordionHeader>
                                <AccordionBody>
                                    <Typography>Yes, if your group allows it, you can edit or update your assignment before the deadline. Simply access the assignment and make the necessary changes.</Typography>
                                </AccordionBody>
                            </Accordion>
                            <Accordion open={open === 4}>
                                <AccordionHeader onClick={() => handleOpen(4)}>{`How can I delete an assignment that I've created as the owner?`}</AccordionHeader>
                                <AccordionBody>
                                    <Typography>{`If you are the assignment owner, you have the ability to delete your own assignments. Follow these steps to delete an assignment: Log in to your GroupStudyHub account.Navigate to the specific study group where you posted the assignment.
                                        Locate the assignment you want to delete in the group's "Assignments" or "Tasks" section.
                                        Look for the "Delete" or "Remove" option within the assignment details. Click on it.
                                        Confirm the deletion when prompted to do so. Please note that this action is irreversible, and the assignment will be permanently removed.`}</Typography>
                                </AccordionBody>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FrequentlyAskQuestions;