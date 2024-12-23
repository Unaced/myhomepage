const FullpagePortfolio = () => {
    const [currentSection, setCurrentSection] = React.useState(0);
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
        <div style={{ height: '100vh', overflow: 'hidden' }}>
            <header className="header">
                <div className="logo">KTY1025의 포트폴리오</div>
                <nav>
                    <ul className="nav-list">
                        {sections.map((section, index) => (
                            <li key={section}>
                                <button
                                    onClick={() => goToSection(index)}
                                    className={`nav-button ${currentSection === index ? 'active' : ''}`}
                                >
                                    {section}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            <div 
                className="fullpage-container"
                style={{ transform: `translateY(-${currentSection * 100}%)` }}
                onWheel={handleWheel}
            >
                <section className="section section-home">
                    <div className="section-content">
                        <h1 className="section-title">KTY1025의 포트폴리오</h1>
                        <p>프로그래밍을 사랑하는 개발자</p>
                    </div>
                </section>

                <section className="section section-about">
                    <div className="section-content">
                        <h2 className="section-title">소개</h2>
                        <p>프로그래밍에 대한 열정을 가지고 다양한 프로젝트를 수행해온 개발자입니다.</p>
                    </div>
                </section>

                <section className="section section-projects">
                    <div className="section-content">
                        <h2 className="section-title">프로젝트</h2>
                        <div className="project-card">
                            <h3>프로젝트 제목</h3>
                            <p>프로젝트 설명이 들어갑니다.</p>
                            <div>사용 기술: C, Python</div>
                        </div>
                    </div>
                </section>

                <section className="section section-skills">
                    <div className="section-content">
                        <h2 className="section-title">기술 스택</h2>
                        <div>
                            <span className="skill-tag">C</span>
                            <span className="skill-tag">Python</span>
                            <span className="skill-tag">HTML/CSS</span>
                        </div>
                    </div>
                </section>

                <section className="section section-contact">
                    <div className="section-content">
                        <h2 className="section-title">연락처</h2>
                        <p>이메일: your.email@example.com</p>
                        <div className="social-links">
                            <a href="#" className="social-link">GitHub</a>
                            <a href="#" className="social-link">LinkedIn</a>
                            <a href="#" className="social-link">Twitter</a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FullpagePortfolio />);
