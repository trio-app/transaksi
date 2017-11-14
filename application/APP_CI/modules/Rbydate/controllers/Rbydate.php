<?php

defined('BASEPATH') OR exit ('No direct script access allowed');

class Rbydate extends MX_Controller{

	public function index(){
		$this->load->view('V_rbydate');
	}
	public function read(){
		$this->load->model('R_rbydate');
		$start = $this->input->post('start');
        $limit = $this->input->post('limit');
        $filter = $this->input->post('filter');
        header('Content-type: application/json');
        print_r( $this->R_bydate->load_deafult($start,$limit,$filter))

	}
	public function create(){
		$jsonData = file_get_contents("php://input");

		//print_r(json_decode($jsonData,true));
		$this->load->model('C_rbydate');
		$this->C_rbydate->insertDT(json_decode($jsonData,TRUE));
	}

	public function update(){
		$jsonData = file_get_contents("php://input");

		$this->load->model(U_rbydate);
		$this->U_rbydate->updateDT(json_decode($jsonData,TRUE));
	}
	public function delete(){
		$jsonData =  file_get_contents("php://input");        
        $this->load->model('D_rbydate');
        $this->D_rbydate->deleteDT(json_decode($jsonData,true));
    }
    public function cbolist(){
        $this->load->model('Rrbydate');
        header('Content-type: application/json');
        print_r($this->Rrbydate->cbolist());
    }
}