import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SmeOnboardingComponent } from './components/sme-onboarding/sme-onboarding.component';
import { SmeDashboardComponent } from './components/sme-dashboard/sme-dashboard.component';
import { FinancierOnboardingComponent } from './components/financier-onboarding/financier-onboarding.component';
import { FinancierOnboardingListComponent } from './components/financier-onboarding/financier-onboarding-list/financier-onboarding-list.component';
import { FinancierDashboardComponent } from './components/financier-dashboard/financier-dashboard.component';
import { SmeBiddingComponent } from './components/sme-bidding/sme-bidding.component';
import { Repayment_todayComponent } from './components/sme-repayment-today/sme-repayment-today.component';
import { SmeBiddingDetailsComponent } from './components/sme-bidding/sme-bidding-details/sme-bidding-details.component';
import { InvoiceRequestComponent } from './components/invoice-request/invoice-request.component';
import { FinanceBiddingComponent } from './components/finance-bidding/finance-bidding.component';
import {FinanceBiddingExpiredComponent} from './components/finance-bidding-expired/finance-bidding-expired.component'
import { InvoiceDetailsComponent } from './components/finance-bidding/invoice-details/invoice-details.component';
import { IccDashboardComponent} from './components/icc-dashboard/icc-dashboard.component';
import {SmeFinanceforBiddingComponent} from './components/sme-financefor-bidding/sme-financefor-bidding.component'
import {AcceptedFinanceComponent} from './components/accepted-finance/accepted-finance.component'
import {FinanceBiddingAcceptsComponent} from './components/finance-bids-accept/finance-bids-accept.component'
import { FinanceBiddingAcceptsDetailsComponent } from './components/finance-bids-accept/finance-bids-accept-details/finance-bids-accept-details.component';
import {InvoiceDetailsExpiredComponent} from './components/finance-bidding-expired/invoice-details-expired/invoice-details-expired.component'
import {FinanceBiddingRejectedComponent} from './components/finance-bidding-rejected/finance-bidding-rejected.component'
import {InvoiceDetailsRejectedComponent} from './components/finance-bidding-rejected/invoice-details-rejected/invoice-details-rejected.component'
import {ICCacceptancedetailsComponent} from './components/icc-offer-acceptance/icc-acceptance-details/icc-acceptance-details.component'
import {IccFundingRequestComponent} from './components/icc-funding-request/icc-funding-request.component'
import {IccOfferAcceptanceComponent}  from './components/icc-offer-acceptance/icc-offer-acceptance.component'
import {IccFinanceMasterComponent} from './components/icc-finance-master/icc-finance-master.component';
import {IccInvoiceMasterComponent} from './components/icc-invoice-master/icc-invoice-master.component';
import {IccFinanceTodayComponent} from './components/icc-finance-today/icc-finance-today.component';
import {FinancierFundedComponent} from './components/financier-funded/financier-funded.component'

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  { path: 'sme-onboarding', component: SmeOnboardingComponent,  data : {"HeaderName" : "Sme Onboarding ", "headerPaths" : [{ path : "/login",pathName : "Login"}] } },
  { path: 'sme-dashboard', component: SmeDashboardComponent,  data : {"HeaderName" : "Seller Dashboard"} },
  { path: 'sme-bidding', component: SmeBiddingComponent ,  data : {"HeaderName" : "SME Bidding ", "headerPaths" : [{ path : "/sme-dashboard",pathName : "Seller Dashboard"}] }},
  { path: 'sme-bidding/:id', component: SmeBiddingDetailsComponent ,  data : {"HeaderName" : "SME Bidding", "headerPaths" : [{ path : "/sme-bidding",pathName : "SME Bidding Details"},{ path : "/sme-dashboard",pathName : "Seller Dashboard"}]}},
  { path: 'sme-finance-for-bidding', component: SmeFinanceforBiddingComponent , data : {"HeaderName" : "Finance For Bidding", "headerPaths" : [{ path : "/sme-dashboard",pathName : "Seller Dashboard"}]}},
  { path: 'accepted-finance', component: AcceptedFinanceComponent , data : {"HeaderName" : "Accepted Finance", "headerPaths" : [{ path : "/sme-dashboard",pathName : "Seller Dashboard"}]}},
  { path: 'invoice-request', component: InvoiceRequestComponent , data : {"HeaderName" : "New Funding Request", "headerPaths" : [{ path : "/sme-dashboard",pathName : "Seller Dashboard"}]}},
  { path: 'repayment_today', component: Repayment_todayComponent , data : {"HeaderName" : "Repayment Today", "headerPaths" : [{ path : "/sme-dashboard",pathName : "Seller Dashboard"}]}},
  { path: 'repayment_overdue', component: Repayment_todayComponent , data : {"HeaderName" : "Repayment Over Due", "headerPaths" : [{ path : "/sme-dashboard",pathName : "Seller Dashboard"}]}},
  
  { path: 'financier-onboarding', component: FinancierOnboardingComponent ,  data : {"HeaderName" : "Financier Onboarding","headerPaths" : [{ path : "/icc-dashboard",pathName : "ICC TradeComm Administrator Dashboard"}]}},
  { path: 'financier-onboarding-list', component: FinancierOnboardingListComponent ,  data : {"HeaderName" : "Financier Onboarding","headerPaths" : [{ path : "/icc-dashboard",pathName : "ICC TradeComm Administrator Dashboard"}]}},
  { path: 'financier-onboarding/:edit/:id', component: FinancierOnboardingComponent ,  data : {"HeaderName" : "Financier Onboarding","headerPaths" : [{ path : "/icc-dashboard",pathName : "ICC TradeComm Administrator Dashboard"}]}},
  { path: 'financier-onboarding/:view/:id', component: FinancierOnboardingComponent ,  data : {"HeaderName" : "Financier Onboarding","headerPaths" : [{ path : "/icc-dashboard",pathName : "ICC TradeComm Administrator Dashboard"}]}},

  { path: 'financier-dashboard', component: FinancierDashboardComponent ,  data : {"HeaderName" : "Financier Dashboard"}},
  { path: 'financier-bids-accept', component: FinanceBiddingAcceptsComponent ,  data : {"HeaderName" : "Bids to be Accepted","headerPaths" : [{ path : "/financier-dashboard",pathName : "Financier Dashboard"}]}},
  { path: 'financier-bids-accept-Details/:type/:id', component: FinanceBiddingAcceptsDetailsComponent ,  data : {"HeaderName" : "Accepted Details","headerPaths" : [{ path : "/financier-bids-accept",pathName : "Bids to be Accepted"},{ path : "/financier-dashboard",pathName : "Financier Dashboard"}]}},
  { path: 'finance-bidding', component: FinanceBiddingComponent, data : {"HeaderName" : "Financier Bidding","headerPaths" : [{ path : "/financier-dashboard",pathName : "Financier Dashboard"}]} },
  { path: 'finance-bidding/:id', component: InvoiceDetailsComponent , data : {"HeaderName" : "Invoice Details","headerPaths" : [{ path : "/finance-bidding",pathName : "Financier Bidding"},{ path : "/financier-dashboard",pathName : "Financier Dashboard"}]}},
  { path: 'invoice-request', component: InvoiceRequestComponent , data : {"HeaderName" : "New Funding Request","homePath" : "/financier-dashboard","headerPaths" : [{ path : "/financier-dashboard",pathName : "Financier Dashboard"}]}},
  { path: 'finance-bidding-expired', component: FinanceBiddingExpiredComponent, data : {"HeaderName" : "Financier Offer Expired","headerPaths" : [{ path : "/financier-dashboard",pathName : "Financier Dashboard"}]} },
  { path: 'finance-bidding-expired-details/:type/:id', component: InvoiceDetailsExpiredComponent , data : {"HeaderName" : "Invoice Details", "headerPaths" : [{ path : "/finance-bidding-expired",pathName : "Financier Offer Expired"},{ path : "/financier-dashboard",pathName : "Financier Dashboard"}]}},
  { path: 'finance-bidding-rejected', component: FinanceBiddingRejectedComponent, data : {"HeaderName" : "Financier Offer Rejected","headerPaths" : [{ path : "/financier-dashboard",pathName : "Financier Dashboard"}]} },
  { path: 'finance-bidding-rejected/:type/:id', component: InvoiceDetailsRejectedComponent , data : {"HeaderName" : "Invoice Details","headerPaths" : [{ path : "/finance-bidding-rejected",pathName : "Financier Offer Rejected"},{ path : "/financier-dashboard",pathName : "Financier Dashboard"}]}},
  { path: 'finance-funded', component: FinancierFundedComponent, data : {"HeaderName" : "Financier Funded","headerPaths" : [{ path : "/financier-dashboard",pathName : "Financier Dashboard"}]} },

  

  { path: 'icc-dashboard', component: IccDashboardComponent , data : {"HeaderName" : "ICC TradeComm Administrator Dashboard"}},
  { path: 'icc-finance-today', component: IccFinanceTodayComponent , data : {"HeaderName" : "Finance-Today","headerPaths" : [{ path : "/icc-dashboard",pathName : "ICC TradeComm Administrator Dashboard"}]}},
  { path: 'icc-finance-master', component: IccFinanceMasterComponent , data : {"HeaderName" : "Finance-Master","headerPaths" : [{ path : "/icc-dashboard",pathName : "ICC TradeComm Administrator Dashboard"}]}},
  { path: 'icc-invoice-master', component: IccInvoiceMasterComponent , data : {"HeaderName" : "Invoice-Master","headerPaths" : [{ path : "/icc-dashboard",pathName : "ICC TradeComm Administrator Dashboard"}]}},
  // { path: 'icc-dashboard', component: IccDashboardComponent , data : {"HeaderName" : ",
  { path: 'icc-funding-request', component: IccFundingRequestComponent , data : {"HeaderName" : "ICC Open Funding" ,"headerPaths" : [{ path : "/icc-dashboard",pathName : "ICC TradeComm Administrator Dashboard"}]}},  
  { path: 'icc-offer-acceptance', component: IccOfferAcceptanceComponent , data : {"HeaderName" : "ICC Offer Acceptance" ,"headerPaths" : [{ path : "/icc-dashboard",pathName : "ICC TradeComm Administrator Dashboard"}]}},
  { path: 'icc-offer-acceptance-details/:type/:id', component: ICCacceptancedetailsComponent , data : {"HeaderName" : "ICC Offer Acceptance Details" ,"headerPaths" : [{ path : "/icc-offer-acceptance",pathName : "ICC Offer Acceptance"},{ path : "/icc-dashboard",pathName : "ICC TradeComm Administrator Dashboard"}]}},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
