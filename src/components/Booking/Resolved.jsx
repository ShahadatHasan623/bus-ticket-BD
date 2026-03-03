import React from 'react';

const Resolved = ({resolved}) => {
    return (
        <div>
            <h1 className='text-xl font-bold'>Resolved Task</h1>
            {
                resolved.length === 0 ? <p>No resolved tasks yet.</p>:<div>
                    {
                        resolved.map(resolve=><div key={resolve.id}>
                            <ol>
                                <li>{resolve.resolvedBy}</li>
                            </ol>
                        </div>)
                    }
                </div>
            }
        </div>
    );
};

export default Resolved;