import React, { useEffect, useState } from 'react';

const PageBtn = (props) => {
    const { showPerPage, onPageChange, total } = props;
    const [count, setCount] = useState(1);

    useEffect(() => {
        const value = showPerPage * count;
        onPageChange(value - showPerPage, value);
    }, [count]);
    const onButtonClick = (type) => {
        if (type === "prev") {
            if (count === 1) {
                setCount(1)
            }
            else {
                setCount(count - 1)
            }
        }
        else if (type === "next") {
            if (Math.ceil(total / showPerPage) === count) {
                setCount(count);
            }
            else {
                setCount(count + 1);
            }
        }
    }
    return (
        <div className="page_btn">
            <button onClick={() => onButtonClick('prev')}>Previous</button>
            <button onClick={() => onButtonClick('next')}>Next</button>
        </div>
    );
};

export default PageBtn;