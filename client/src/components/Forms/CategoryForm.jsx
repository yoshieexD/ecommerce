import React from 'react';

const CategoryForm = ({ handleSubmit, value, setValue }) => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter new category" value={value} onChange={(e) => setValue(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary mt-4">Submit</button>
            </form>
        </>
    );
};

export default CategoryForm;