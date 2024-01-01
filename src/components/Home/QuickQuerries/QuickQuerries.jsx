import { Typography } from "@material-tailwind/react";
import { useState } from "react";
import faq from '../../../assets/FAQ.png';
import QuickQuerrie from "./QuickQuerrie";

const quickQuerries = [
    {
        id: 1,
        question: 'Is GroupStudyHub free to use?',
        answer: 'Yes, GroupStudyHub is completely free to use. We believe in making collaborative learning accessible to all students.',
    },
    {
        id: 2,
        question: 'How can I share study materials with my group members?',
        answer: 'Uploading and sharing study materials is simple. Navigate to your Create assignment page, and upload your own assignment. Group members can then access the shared materials.',
    },
    {
        id: 3,
        question: 'Can I edit or update my assignment after I\'ve submitted it?',
        answer: 'Yes, if your group allows it, you can edit or update your assignment before the deadline. Simply access the assignment and make the necessary changes.',
    },
    {
        id: 4,
        question: 'How can I delete an assignment that I\'ve created as the owner?',
        answer: 'If you are the assignment owner, you have the ability to delete your own assignments. Follow these steps to delete an assignment: Log in to your GroupStudyHub account. Navigate to the specific study group where you posted the assignment. Locate the assignment you want to delete in the group\'s "Assignments" or "Tasks" section. Look for the "Delete" or "Remove" option within the assignment details. Click on it. Confirm the deletion when prompted to do so. Please note that this action is irreversible, and the assignment will be permanently removed.',
    },
];

const QuickQuerries = () => {
    const [open, setOpen] = useState(quickQuerries[0].id);

    return (
        <div
            className="bg-faq">
            <div className="bg-[#F1F2F4]/80">
                <div className="container lg:py-28">
                    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 items-center">
                        <div className="flex items-center justify-center">
                            <img src={faq} alt="Frequently Asked Questions" />
                        </div>
                        <div>
                            <Typography variant="h3" className="mb-5">FAQ - Your Questions Answered</Typography>

                            {
                                quickQuerries?.map(quickQuerrie => <QuickQuerrie key={quickQuerrie?.id} item={quickQuerrie} handler={{ open, setOpen }} />)
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickQuerries;