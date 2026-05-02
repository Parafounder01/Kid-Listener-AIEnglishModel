export default function GradeSelect() {
  const grades = ['PKG', '1st', '2nd', '3rd', '4th', '5th', '6th']
  
  return (
    <div className="p-8">
      <h2 className="text-4xl font-bold text-center mb-8">Select Your Grade</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {grades.map(grade => (
          <button 
            key={grade}
            className="bg-primary text-3xl font-bold py-8 rounded-3xl hover:scale-105 transition"
          >
            {grade}
          </button>
        ))}
      </div>
    </div>
  )
}
