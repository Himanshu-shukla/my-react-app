import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Losers from './pages/Losers';
import NewListings from './pages/NewListings';
import SettingProfile from './pages/SettingProfile';
import SettingWallet from './pages/SettingWallet';
import SettingVerification from './pages/SettingVerification';
import MarketList from './pages/MarketList';
import Market from './pages/Market';
import Trade from './pages/Trade';
import P2PTradingLineChart from './pages/P2PTradingLineChart';
import P2PTradingLineChart2 from './pages/P2PTradingLineChart2';
import P2PTradingLineChart3 from './pages/P2PTradingLineChart3';
import P2PTradingProc from './pages/P2PTradingProc';
import Assets from './pages/Assets';
import Deposit from './pages/Deposit';
import WithdrawTransfer from './pages/WithdrawTransfer';
import WithdrawTransferConfirmation from './pages/WithdrawTransferConfirmation';
import BuyCryptocurrency from './pages/BuyCryptocurrency';
import AssetDetailForm from './pages/AssetDetailForm';
import AssetTokenisationForm2 from './pages/AssetTokenisationForm2';
import AssetTokenisationForm3 from './pages/AssetTokenisationForm3';
import AssetTokenisationForm4 from './pages/AssetTokenisationForm4';
import AssetTokenisationForm5 from './pages/AssetTokenisationForm5';
import DelistAssetTokenForm from './pages/DelistAssetTokenForm';
import DelistAssetTokenForm2 from './pages/DelistAssetTokenForm2';
import DelistAssetTokenForm3 from './pages/DelistAssetTokenForm3';
import DelistAssetTokenForm4 from './pages/DelistAssetTokenForm4';
import CustomerSupport from './pages/CustomerSupport';
import CustomerSupportChat from './pages/CustomerSupportChat';
import ICOPageOngoing from './pages/ICOPageOngoing';
import ICOPageUpcoming from './pages/ICOPageUpcoming';
import ICOPageCompleted from './pages/ICOPageCompleted';
import ICODetailPage from './pages/ICODetailPage';
import StakeAndEarn from './pages/StakeAndEarn';
import StakeAndEarn2 from './pages/StakeAndEarn2';
import FAQs from './pages/FAQs';
import JunaBlog from './pages/JunaBlog';

import buttons from './buttonData';
// import { Home } from '@mui/icons-material';

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const Buttons = ({ buttons, navigate }) => {
  return (
    <div>
      <h1>Homepage</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {buttons.map((button) => (
          <button key={button.id} onClick={() => navigate(button.url)}>
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
};

const AppContent = () => {
  // An array of objects representing each button
  const navigate = useNavigate();

  return (
    <div >
      <div style={{ display: 'flex' }}>
        <Routes>
        <Route path="/button" element={<Buttons buttons={buttons} navigate={navigate} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/losers" element={<Losers />} />
          <Route path="/newlistings" element={<NewListings />} />
          <Route path="/setting-profile" element={<SettingProfile />} />
          <Route path="/setting-wallet" element={<SettingWallet />} />
          <Route path="/setting-verification" element={<SettingVerification />} />
          <Route path="/market-list" element={<MarketList />} />
          <Route path="/market" element={<Market />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/p2p-trading-lc" element={<P2PTradingLineChart />} />
          <Route path="/p2p-trading-lc2" element={<P2PTradingLineChart2 />} />
          <Route path="/p2p-trading-lc3" element={<P2PTradingLineChart3 />} />
          <Route path="/p2p-trading-proc" element={<P2PTradingProc />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw-tansfer" element={<WithdrawTransfer />} />
          <Route path="/wt-confirmation" element={<WithdrawTransferConfirmation />} />
          <Route path="/buy-crypto" element={<BuyCryptocurrency />} />
          <Route path="/asset-detail" element={<AssetDetailForm />} />
          <Route path="/asset-token-2" element={<AssetTokenisationForm2 />} />
          <Route path="/asset-token-3" element={<AssetTokenisationForm3 />} />
          <Route path="/asset-token-4" element={<AssetTokenisationForm4 />} />
          <Route path="/asset-token-5" element={<AssetTokenisationForm5 />} />
          <Route path="/delist-asset-token" element={<DelistAssetTokenForm />} />
          <Route path="/delist-asset-token-2" element={<DelistAssetTokenForm2 />} />
          <Route path="/delist-asset-token-3" element={<DelistAssetTokenForm3 />} />
          <Route path="/delist-asset-token-4" element={<DelistAssetTokenForm4 />} />
          <Route path="/customer-support" element={<CustomerSupport />} />
          <Route path="/account-assistant" element={<CustomerSupportChat />} />
          <Route path="/ico-page-ongoing" element={<ICOPageOngoing />} />
          <Route path="/ico-page-upcoming" element={<ICOPageUpcoming />} />
          <Route path="/ico-page-completed" element={<ICOPageCompleted />} />
          <Route path="/ico-details" element={<ICODetailPage />} />
          <Route path="/stake-earn" element={<StakeAndEarn />} />
          <Route path="/stack-earn2" element={<StakeAndEarn2 />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/juna-blog" element={<JunaBlog />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
