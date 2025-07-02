import UnderDevelopment from "@/pages/under-development";
import PortfolioPage from "./pages/portfolio";

interface AppProps {
  dev: boolean;
}

function App({ dev }: AppProps) {
  return dev ? <UnderDevelopment /> : <PortfolioPage />;
}

export default App;
