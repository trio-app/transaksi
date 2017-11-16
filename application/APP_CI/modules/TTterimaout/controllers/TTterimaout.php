<?php 
date_default_timezone_set("Asia/Jakarta");
defined('BASEPATH')OR exit('NO direct script access allowed');

class TTterimaout extends CI_Controller {
	public function __construct(){
		parent::__construct() ;
	}

	public function index(){
		$this->load->view('V_tterimaout');
	}

	public function autoNum(){
		$this->load->model('R_tterimaout');

		$month	= date('m');
		$year	= date('Y');
		$num 	= $this->R_tterimaout->autoNum();
		$cek	= strlen($num);

		if($cek == 1){
			$auto = '000' . $num;
		}elseif ($cek == 2) {
			$auto = '00' . $num;
		}elseif ($cek == 3) {
			$auto = '0' . $num;
		}else{
			$auto = '' . $num;
		}
		$data['date'] = date('Y-m-d');
		
		echo $month. '.' . $auto . '/AP/TTO/' . $year;

	}
	public function read(){
		$this->load->model('R_tterimaout');
		$start = $this->input->post('start');
		$limit = $this->input->post('limit');
		$filter= $this->input->post('filter');
		header( $this->R_tterimaout->load_default($start,$limit,$filter));
	}

	public function create(){
		$jsonData = file_get_contents("php://input");
		$data = explode(',||,',$jsonData);

		$this->load->model('C_tterimaout');
		$num = $this->C_tterimaout->insertDT(json_decode($data[0],true));
        $this->C_tterimaout->insertGrid(json_decode($data[1],true),$num);
        $this->C_tterimaout->autoNum();
	}
	
	public function update(){
        $jsonData =  file_get_contents("php://input");    
        $data = explode(',||,',$jsonData);
        $this->load->model('U_tterimaout');
        $num = $this->U_tterimaout->updateDT(json_decode($data[0],true));
        $this->U_tterimaout->updateGrid(json_decode($data[1],true),$num);
    }
    public function delete(){
        $jsonData =  file_get_contents("php://input");  
        $data = explode(',||,',$jsonData);
        $this->load->model('D_tterimaout');
        $this->D_tterimaout->deleteDT(json_decode($data[0],true));
    }  

	public function getGrid(){
        $jsonData =  file_get_contents("php://input");
        $doc = $this->input->post('recdetail_doc');
        $this->load->model('R_tterimaout');
        header('Content-type: application/json');
        print_r($this->R_tterimaout->getGrid($doc));
    }

     public function customerTTO(){
            $this->load->model('R_tterimaout');
            $start = $this->input->post('start');
            $limit = $this->input->post('limit');
            $filter = $this->input->post('filter');
            header('Content-type: application/json');
            print_r( $this->R_tterimaout->load_customerTT($start,$limit,$filter));          
        }        
    
    public function reportPreview($id = NULL){
          ob_start();
                    $this->load->model('R_tterimaout');
                    $rec = $this->R_tterimaout->reportPreview($id);
          
                    $data['rec_doc'] = $rec['receipt_doc'];
                    $data['rec_to'] = $rec['customer_nama'];
                    $data['rec_from'] = $rec['receipt_from'];
                    $data['rec_date'] = date_format(date_create($rec['receipt_date']), 'd F Y');
            
                    $data['rec_detail'] = $this->R_tterimaout->reportDetail($rec['receipt_doc']);
                    
                    //print_r($this->Rpacking_list->reportPreview($id));
                    $this->load->view('previewPrint', $data);
                    $html = ob_get_contents();
          ob_end_clean();
                    
                    require_once('./system/html2pdf/html2pdf.class.php');
                    $pdf = new HTML2PDF('L',array('215','140'),'en');
                    $pdf->writeHTML($html);
                    $pdf->Output();	        
    }

}
