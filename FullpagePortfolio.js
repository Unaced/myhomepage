import React, { useState } from 'react';

const FullpagePortfolio = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = ['home', 'about', 'projects', 'skills', 'contact'];

  const handleWheel = (e) => {
    if (e.deltaY > 0 && currentSection < sections.length - 1) {
      setCurrentSection(prev => prev + 1);
    } else if (e.deltaY < 0 && currentSection > 0) {
      setCurrentSection(prev => prev - 1);
    }
  };

  const goToSection = (index) => {
    setCurrentSection(index);
  };

  return (
    <div className="h-screen overflow-hidden">
      {/* 헤더 (검은색 배경) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white px-8 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">KTY1025의 포트폴리오</div>
        <nav>
          <ul className="flex gap-8">
            {sections.map((section, index) => (
              <li key={section}>
                <button
                  onClick={() => goToSection(index)}
                  className={`capitalize px-4 py-2 hover:text-blue-400 transition-colors ${
                    currentSection === index ? 'text-blue-400' : ''
                  }`}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* 풀페이지 섹션 */}
      <div 
        className="h-screen transition-transform duration-700 ease-in-out"
        style={{ transform: `translateY(-${currentSection * 100}%)` }}
        onWheel={handleWheel}
      >
        {/* 홈 섹션 */}
        <section className="h-screen bg-gray-900 text-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">KTY1025의 포트폴리오</h1>
            <p className="text-xl">프로그래밍을 사랑하는 개발자</p>
          </div>
        </section>

        {/* 소개 섹션 */}
        <section className="h-screen bg-white flex items-center justify-center p-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-6">소개</h2>
            <p className="text-lg">
              프로그래밍에 대한 열정을 가지고 다양한 프로젝트를 수행해온 개발자입니다.
            </p>
          </div>
        </section>

        {/* 프로젝트 섹션 */}
        <section className="h-screen bg-gray-50 flex items-center justify-center p-8">
          <div className="max-w-4xl w-full">
            <h2 className="text-3xl font-bold mb-6">프로젝트</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">프로젝트 제목</h3>
                <p>프로젝트 설명이 들어갑니다.</p>
                <div className="mt-4">사용 기술: C, Python</div>
              </div>
            </div>
          </div>
        </section>

        {/* 기술 스택 섹션 */}
        <section className="h-screen bg-white flex items-center justify-center p-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-6">기술 스택</h2>
            <div className="flex flex-wrap gap-4">
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full">C</span>
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full">Python</span>
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full">HTML/CSS</span>
            </div>
          </div>
        </section>

        {/* 연락처 섹션 */}
        <section className="h-screen bg-gray-50 flex items-center justify-center p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">연락처</h2>
            <p className="mb-4">이메일: your.email@example.com</p>
            <div className="flex gap-6 justify-center">
              <a href="#" className="text-gray-800 hover:text-blue-500 transition-colors">GitHub</a>
              <a href="#" className="text-gray-800 hover:text-blue-500 transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-800 hover:text-blue-500 transition-colors">Twitter</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FullpagePortfolio;
