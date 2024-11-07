const calculateDateDifference = (startDate: string) => {
    const now = new Date();
    const start = new Date(startDate);

    // Calculate total years
    let years = now.getFullYear() - start.getFullYear();


    
    const months = years * 12 + now.getMonth() - start.getMonth();
 
    if (now.getMonth() < start.getMonth() || (now.getMonth() === start.getMonth() && now.getDate() < start.getDate())) {
        years -= 1;
    }


    const monthsAdjusted = now.getDate() < start.getDate() ? months - 1 : months;
    
    
    const days = Math.floor((now.getTime() - start.getTime()) / (1000 * 3600 * 24)); 

    // Calculate total seconds
    const seconds = Math.floor((now.getTime() - start.getTime()) / 1000); // Convert ms to seconds

    return {
        years, months: monthsAdjusted, days, seconds
    };
};

export default calculateDateDifference;

