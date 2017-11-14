<?php

defined('BASEPATH') OR exit ('No direct script access allowed');

class RpDate extends MX_Controller{

	public function index(){
		$this->load->view('V_rpdate');
	}
	public function read(){
		$this->load->model('R_rpdate');
		$start = $this->input->post('start');
        $limit = $this->input->post('limit');
        $filter = $this->input->post('filter');
        header('Content-type: application/json');
        print_r( $this->R_pDate->load_deafult($start,$limit,$filter));

	}
	public function create(){
		$jsonData = file_get_contents("php://input");

		//print_r(json_decode($jsonData,true));
		$this->load->model('C_rpdate');
		$this->C_rpdate->insertDT(json_decode($jsonData,TRUE));
	}

	public function update(){
		$jsonData = file_get_contents("php://input");

		$this->load->model(U_rpdate);
		$this->U_rpdate->updateDT(json_decode($jsonData,TRUE));
	}
	public function delete(){
		$jsonData =  file_get_contents("php://input");        
        $this->load->model('D_rpdate');
        $this->D_rpdate->deleteDT(json_decode($jsonData,true));
    }
    public function cbolist(){
        $this->load->model('Rrpdate');
        header('Content-type: application/json');
        print_r($this->Rrpdate->cbolist());
    }
}