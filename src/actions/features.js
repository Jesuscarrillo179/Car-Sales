export const removeFeature = index => {
  console.log('removing...')
  return {type: 'REMOVE_FEATURE', payload: index }
};

export const addFeature = index => {
    return {type: 'ADD_FEATURE', payload: index }
  };
  
