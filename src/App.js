import Sidebar from "./Layouts/Sidebar/Sidebar";
import Header from "./Layouts/Header/Header";
import Overview from "./Pages/Overview/Overview";
import Newsbar from "./Layouts/Newsbar/Newsbar";
import Footer from "./Layouts/Footer/Footer";
import { Routes, Route } from "react-router";
import Profile from "./Pages/Profile/Profile";
import Board from "./Pages/Board&Managment/Board";
import Chart from "./Pages/Chart/Chart";
import InvestorCalculator from "./Pages/InvestorCalculator/InvestorCalculator";
import MajorShareholders from "./Pages/MajorShareholders/MajorShareholders";
import NegotiatedDeals from "./Pages/Negotiated Deals/NegotiatedDeals";
import FinancialStatments from "./Pages/FinancialStatments/FinancialStatments";
import FinancialReports from "./Pages/FinancialReports/FinancialReports";
import Annual from "./Components/FinancialReportsComps/Annual/Annual";
import Quarter from "./Components/FinancialReportsComps/Quarter/Quarter";
import BoardReport from "./Components/FinancialReportsComps/BoardReport/BoardReport";
import MarketData from "./Components/OverviewComps/MarketDate/MarketData";
import FinancialRatios from "./Components/OverviewComps/FinancialRatios/FinancialRatios";
import CorporateActions from "./Components/OverviewComps/CorporateActions/CorporateActions";
import { CorporateActions as CorporateActionsPage } from "./Pages/CorporateActions/CorporateActions";
import Disclosers from "./Components/OverviewComps/Disclosers/Disclosers";
import CapitalChanges from "./Components/CorporateActionsComps/CapitalChanges/CapitalChanges";
import HistoricalDividends from "./Components/CorporateActionsComps/HistoricalDividends/HistoricalDividends";
import RecentChanges from "./Components/GlobalComps/RecentChanges/RecentChanges";
import RecentDividends from "./Components/GlobalComps/RecentDividends/RecentDividends";
import BasicInfoSec from "./Components/ProfileComps/BasicInfoSec/BasicInfoSec";
import FinancialHighlightsSec from "./Components/ProfileComps/FinancialHighlightsSec/FinancialHighlightsSec";
import TradingDataSec from "./Components/ProfileComps/TradingDataSec/TradingDataSec";
import StockInfoSec from "./Components/ProfileComps/StockInfoSec/StockInfoSec";
import MajorShareholdersSec from "./Components/ProfileComps/MajorShareholdersSec/MajorShareholdersSec";
import MilestonesSec from "./Components/ProfileComps/MilestonesSec/MilestonesSec";
import Projects from "./Pages/Projects/Projects";
import AnalystCoverage from "./Pages/AnalystCoverage/AnalystCoverage";
import SubscriptionCenter from "./Pages/SubscriptionCenter/SubscriptionCenter";
import FinancialRatiosPage from "./Pages/FinancialRatiosPage/FinancialRatiosPage";
import InvestorPresentations from "./Pages/InvestorPresentations/InvestorPresentations";
import BusinessSegments from "./Pages/BusinessSegments/BusinessSegments";
import DisclosuresPage from "./Pages/DisclosuresPage/DisclosuresPage";
import DisclosuresMainComp from "./Components/DisclosuresComps/DisclosuresMainComp/DisclosuresMainComp";
import News from "./Components/DisclosuresComps/News/News";
import Events from "./Components/DisclosuresComps/Events/Events";
import AnalystEstimates from "./Components/DisclosuresComps/AnalystEstimates/AnalystEstimates";
import YearsChart from "./Components/ChartPageComps/YearsChart/YearsChart";
import HistoricalTradingData from "./Components/ChartPageComps/FinancialHighlights/HistoricalTradingData";
import ForeginOwnership from "./Components/MajorShareholderComps/ForeignOwnership/ForeginOwnership";
import HistoricalChanges from "./Components/MajorShareholderComps/HistoricalChanges/HistoricalChanges";
import BoardMainSec from "./Components/BoardComps/BoardMainSec/BoardMainSec";
import SalariesAndBonuses from "./Components/BoardComps/Salaries&Bonuses/Salaries&Bonuses";
import CompnayOverview from "./Components/OverviewComps/CompanyOverview/CompnayOverview";
import AccessRefreshTokens, { token } from "./Services/services";
import { useState, useEffect } from "react";
import Loader from "./Components/GlobalComps/Loader/Loader";
function App() {
  const [auth, setAuth] = useState(false)

  useEffect(() => {
    AccessRefreshTokens.getAccessToken().then(() => setAuth(true))
  }, [])

  if (!auth) {
    return <Loader />
  }
  else {
    return (
      <div className="App">
        <Header />
        <div className="container-lg">
          <div className="row">
            <div className="col-lg-3 col-md-12 sidebar-container p-0">
              <Sidebar />
            </div>
            <div className="col-lg-9 col-md-12 col-sm-12 col-12 px-3">
              <div className="min-height mx-3">
                <Routes>
                  <Route path="/" element={<CompnayOverview />} />
                  <Route path="/profile" element={<Profile />}>
                    <Route index element={<BasicInfoSec />} />
                    <Route
                      path="/profile/basic-info"
                      element={<BasicInfoSec />}
                    />
                    <Route
                      path="/profile/financial-highlights"
                      element={<FinancialHighlightsSec />}
                    />
                    <Route
                      path="/profile/trading-data"
                      element={<TradingDataSec />}
                    />
                    <Route
                      path="/profile/stock-info"
                      element={<StockInfoSec />}
                    />
                    <Route
                      path="/profile/subdiaries"
                      element={<MajorShareholdersSec />}
                    />
                    <Route
                      path="/profile/subdairies"
                      element={<MajorShareholdersSec />}
                    />
                    <Route
                      path="/profile/milestones"
                      element={<MilestonesSec />}
                    />
                  </Route>
                  <Route path="/overview" element={<Overview />}>

                    <Route index element={<CompnayOverview />} />
                    <Route
                      path="/overview/company-overview"
                      element={<CompnayOverview />}
                    />
                    <Route
                      path="/overview/market-data"
                      element={<MarketData />}
                    />

                    <Route
                      path="/overview/financial-ratios"
                      element={<FinancialRatios />}
                    />

                    <Route
                      path="/overview/corporate-actions"
                      element={<CorporateActions />}
                    />

                    <Route path="/overview/disclosers" element={<Disclosers />} />
                  </Route>
                  <Route path="/board&managment" element={<Board />}>
                    <Route index element={<BoardMainSec />} />
                    <Route
                      path="/board&managment/board"
                      element={<BoardMainSec />}
                    />
                    <Route
                      path="/board&managment/salaries&bonuses"
                      element={<SalariesAndBonuses />}
                    />
                  </Route>
                  <Route path="/chart" element={<Chart />}>
                    <Route index element={<YearsChart />} />
                    <Route path="/chart/stock-chart" element={<YearsChart />} />
                    <Route
                      path="/chart/historical-trading-data"
                      element={<HistoricalTradingData />}
                    />
                  </Route>
                  {/* <Route
                    path="/investorcalculator"
                    element={<InvestorCalculator />}
                  /> */}
                  <Route
                    path="/majorshareholders"
                    element={<MajorShareholders />}
                  >
                    <Route index element={<ForeginOwnership />} />
                    <Route
                      path="/majorshareholders/foreignownership"
                      element={<ForeginOwnership />}
                    />
                    <Route
                      path="/majorshareholders/historical-changes"
                      element={<HistoricalChanges />}
                    />
                  </Route>
                  <Route path="/negotiated-deals" element={<NegotiatedDeals />} />
                  <Route
                    path="/financial-statments"
                    element={<FinancialStatments />}
                  />
                  <Route
                    path="/financial-ratios"
                    element={<FinancialRatiosPage />}
                  />
                  <Route path="/financial-reports" element={<FinancialReports />}>
                    <Route
                      index
                      element={<Annual />}
                    />
                    <Route
                      path="/financial-reports/annual"
                      element={<Annual />}
                    />
                    <Route
                      path="/financial-reports/quarter"
                      element={<Quarter />}
                    />
                    <Route
                      path="/financial-reports/board-report"
                      element={<BoardReport />}
                    />
                  </Route>

                  <Route
                    path="/investor-presentations"
                    element={<InvestorPresentations />}
                  />

                  <Route
                    path="/business-segments"
                    element={<BusinessSegments />}
                  />

                  <Route
                    path="/corporate-actions"
                    element={<CorporateActionsPage />}
                  >
                    <Route index element={<CapitalChanges />} />
                    <Route
                      path="/corporate-actions/capital-changes"
                      element={<CapitalChanges />}
                    />

                    <Route
                      path="/corporate-actions/historical-dividends"
                      element={<HistoricalDividends />}
                    />
                    <Route
                      path="/corporate-actions/recent-changes"
                      element={<RecentChanges />}
                    />
                    <Route
                      path="/corporate-actions/recent-dividends"
                      element={<RecentDividends />}
                    />
                  </Route>

                  <Route path="/projects" element={<Projects />} />
                  <Route path="/analyst-coverage" element={<AnalystCoverage />} />
                  <Route
                    path="/subscription-center"
                    element={<SubscriptionCenter />}
                  />

                  <Route
                    path="/investor-calculator"
                    element={<InvestorCalculator />}
                  />

                  <Route path="/disclosures" element={<DisclosuresPage />}>
                    <Route
                      index
                      element={<DisclosuresMainComp />}
                    />
                    <Route
                      path="/disclosures/main-sec"
                      element={<DisclosuresMainComp />}
                    />
                    <Route path="/disclosures/news" element={<News />} />
                    <Route path="/disclosures/events" element={<Events />} />
                    <Route
                      path="/disclosures/analyst-estimates"
                      element={<AnalystEstimates />}
                    />
                  </Route>
                </Routes>
              </div>
            </div>
          </div>
          <Footer />

          <Newsbar />
        </div>
      </div>
    );
  }
}

export default App;
