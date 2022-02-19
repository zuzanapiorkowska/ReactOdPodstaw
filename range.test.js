test('should return array containing values for a given range', ()=>{

    const res = range(5);

    expect(res).toEqual([0,1,2,3,4])
}) 