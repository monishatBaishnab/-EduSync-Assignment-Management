import { Accordion, AccordionBody, AccordionHeader, Typography } from "@material-tailwind/react";
import PropTypes from 'prop-types';

const QuickQuerrie = ({ item, handler }) => {
    const { open, setOpen } = handler || {};
    const handleOpen = value => setOpen(value);
    const { id, question, answer } = item || {};

    return (
        <Accordion open={open === id}>
            <AccordionHeader onClick={() => handleOpen(id)}>{question}</AccordionHeader>
            <AccordionBody>
                <Typography>{answer}</Typography>
            </AccordionBody>
        </Accordion>
    );
};

QuickQuerrie.propTypes = {
    item: PropTypes.object,
    handler: PropTypes.object,
}

export default QuickQuerrie;