<?php

defined('BASEPATH') OR exit ('No direct script access allowed');

class RpDate extends MX_Controller{

	public function index(){
		$this->load->view('V_rpdate');
	}
	public function getGrid(){
            //$jsonData =  file_get_contents("php://input");
            $doc = $this->input->post('transaksi_doc');
            $this->load->model('R_rpdate');
            header('Content-type: application/json');
            print_r($this->R_rpdate->getGrid($doc));
    }

	public function read(){
		$this->load->model('R_rpdate');
		$start = $this->input->post('start');
        $limit = $this->input->post('limit');
        $filter = $this->input->post('filter');
        header('Content-type: application/json');
        print_r( $this->R_rpdate->load_deafult($start,$limit,$filter));

	}

	public function exportTransaksi(){
        $doc = $this->input->post('transaksi_doc');
        $this->load->model('R_rpdate');
        print_r($this->R_rpdate->exportTransaksi($doc));
        $data['query'] = $this->R_rpdate->exportTransaksi();
        $this->load->view('vexceltransaksi');
        }

	public function exportDetail(){
        $this->load->model('R_rpdate');
        $data['query'] = $this->R_rpdate->exportDetail();
        $this->load->view('vexceldetail', $data);
        }

}