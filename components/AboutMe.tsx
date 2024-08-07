import React from 'react';
// Passionate Developer, Creative Mind, Tech Enthusiast
const AboutMe = ({ traits }: any) => {
  const idk = traits.split(", ")
  return (
    <section className="container mx-auto text-center py-12">
      <div className="flex justify-center">
        {idk.map((trait: string) => (
        <div key={`${trait.split(" ")[0]}`} className="bg-gray-800 text-white rounded-full p-4 mx-2">
          <p>{`${trait}`}</p>
        </div>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
