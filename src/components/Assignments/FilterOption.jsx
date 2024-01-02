import { Checkbox, Typography } from "@material-tailwind/react";
import PropTypes from 'prop-types';
import { useState } from "react";
import { MdOutlineRefresh } from "react-icons/md";

const FilterOption = ({ title, action, items }) => {
    const [checked, setChecked] = useState();
    const setFunc = (val) => {
        if(val === 'default'){
            setChecked(val);
            action('');
            return;
        }
        setChecked(val);
        action(val);
    }

    return (
        <div>
            <div className="flex items-center justify-between">
                <Typography color="blue-gray" className="font-medium text-sm">{title}</Typography>
                <button onClick={() => setFunc('default')} className="p-1 bg-secondery rounded-sm text-primary text-xl group"><MdOutlineRefresh className="transition-all group-active:rotate-180" /></button>
            </div>
            <div id="filter-option" className="mt-2 overflow-y-auto">
                <div className="max-h-56">
                    {
                        items?.map(item =>
                            <div key={item?.id}>
                                <Checkbox
                                    ripple={false}
                                    checked={checked === item?.value}
                                    onChange={() => setFunc(item?.value, title)}
                                    label={item?.value}
                                    labelProps={{ className: 'text-sm font-normal capitalize'}}
                                    className="before:hidden"
                                />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

FilterOption.propTypes = {
    title: PropTypes.string,
    items: PropTypes.array,
    action: PropTypes.func,
}

export default FilterOption;