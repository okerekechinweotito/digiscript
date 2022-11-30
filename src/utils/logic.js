export const handleBill = (e, setTotal, total) => {
    e.preventDefault();
    setTotal((prevState) => ({
        ...prevState,
        bill: parseFloat(e.target.value),
    }));
};

export const handleTip = (e, setTotal, total) => {
    setTotal((prevState) => ({
        ...prevState,
        tip: parseInt(e.target.value),
        tipperperson: (
            ((total.bill / 100) * parseInt(e.target.value)) /
            total.people
        ).toFixed(2),
        totalperperson: (
            ((total.bill / 100) * parseInt(e.target.value)) / total.people +
            total.bill / 5
        ).toFixed(2),
    }));
};

export const handlePeople = (e, setTotal, total) => {
    e.preventDefault();
    setTotal((prevState) => ({
        ...prevState,
        people: parseFloat(e.target.value),
    }));
};

export const calculate = (e, setTotal, total) => {
    setTotal((prevState) => ({
        ...prevState,
        tipperperson: (((total.bill / 100) * total.tip) / total.people).toFixed(
            2
        ),
        totalperperson: (
            ((total.bill / 100) * total.tip) / total.people +
            total.bill / total.people
        ).toFixed(2),
    }));
};
