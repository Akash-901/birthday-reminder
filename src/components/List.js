import React from 'react'

function List({ people }) {
    return (
        <>
            {
                people.map((person) => {
                    const { id, name, age, image } = person;
                    return (
                        <article key={id} className="person">

                            <img src={image} alt={name} />

                            <div className="info">
                                <h3>{name}</h3>
                                <p>{age}</p>
                            </div>
                        </article>
                    );
                })
            }
        </>
    );
};

export default List
