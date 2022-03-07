import Card from './components/Card';
import SupervisorIcon from './assets/icon-supervisor.svg';
import TeamBuilderIcon from './assets/icon-team-builder.svg';
import KarmaIcon from './assets/icon-karma.svg';
import CalculatorIcon from './assets/icon-calculator.svg';

function App() {
  return (
    <div className="text-center py-20 px-9">
      <header className="lg:flex flex-col items-center">
        <h1 className="font-thin text-3xl text-very-dark-blue leading-9 mb-5">
          Reliable, efficient delivery
          <br />
          <b className="font-bold">Powered by Technology</b>
        </h1>
        <p className="text-grayish-blue tracking-tight mb-20 lg:w-4/12 lg:px-12">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </header>
      <main className="block 2xl:w-7/12 2xl:px-8 lg:w-4/5 lg:m-auto lg:grid lg:grid-cols-3 lg:grid-rows-4 lg:gap-6">
        <Card
          className="lg:row-start-2"
          title="Supervisor"
          content="Monitors activity to identify project roadblocks"
          color="cyan"
          iconURL={SupervisorIcon}
        />
        <Card
          title="Team Builder"
          content="Scans our talent network to create the optimal team for your project"
          color="red"
          iconURL={TeamBuilderIcon}
        />
        <Card
          className="lg:col-start-2"
          title="Karma"
          content="Regularly evaluates our talent to ensure quality"
          color="orange"
          iconURL={KarmaIcon}
        />
        <Card
          className="lg:col-start-3 lg:row-start-2"
          title="Calculator"
          content="Uses data from past projects to provide better delivery estimates"
          color="blue"
          iconURL={CalculatorIcon}
        />
      </main>
      <footer className="mt-24 text-very-dark-blue font-mono">
        <p className="text-sm">
          Challenge by{' '}
          <a
            className="text-blue"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          .
          <br />
          Coded with ❤️ by{' '}
          <a className="text-blue" href="https://oscararranz.com">
            Oscar Arranz
          </a>
          .
        </p>
      </footer>
    </div>
  );
}

export default App;
