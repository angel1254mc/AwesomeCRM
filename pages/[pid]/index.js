import React from 'react';
import { DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import data from '../../public/fake_pipeline.js'
import styles from '../../styles/Pipeline.module.css';
/**
 * @function Pipeline
 * @whatisit = @page
 * @description The Pipeline Component is a page, that maps the data fetched from node.js to a set of stage and 
 */
const Pipeline = (props) => {
    const pipeline = data;
    const elements = data;
    const stage = "Unqualified";
    return (
        <div className={styles.pipeline_container}>
        <DragDropContext>
            <Droppable droppableId={"stage"}>
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps} className={styles.stage_col}>
                    {elements[stage].map((opp, index) => {
                        return (
                        <Draggable key={index} draggableId={opp} index={index}>
                            {(provided) => (
                            <div id={opp} className={styles.contract_card}  ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                                YES
                            </div>
                            )}
                        </Draggable>
                        )})
                    }
                    {provided.placeholder}
                    </div>
                    )}
            </Droppable>
        </DragDropContext>
        
        </div>
    )
}

export const getServerSideProps = async (context) => {
    /**
     * @note I forgor how to do server side props lol
     */
    return {
        props: {
            
        }
    }
}

export default Pipeline;