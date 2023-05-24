<?php

class BookmundiTest
{
   public $data = [
    '1'=>100,
    '2'=>50,
    '3'=>200,
    '4'=>150,
    '5'=>40,
    '6'=>80,
    ];

    public function convertXmlToJson($url)
    {
        $xmlData = simplexml_load_file($url);
        $jsonData = json_encode($xmlData);
        return $jsonData;
    }

    public function getLists($threshold)
    {
        $data = $this->data;
        $filter = array_filter($data,function($price) use ($threshold){
            return $price > $threshold;
        });

        return $filter;
    }

    public function sum($filteredLists)
    {
        $sum = array_sum($filteredLists);

        return $sum;
    }

}

$bookmundiTest = new BookmundiTest();

print_r($bookmundiTest->convertXmlToJson("http://ftp.geoinfo.msl.mt.gov/Documents/Metadata/GIS_Inventory/35524afc-669b-4614-9f44-43506ae21a1d.xml"));
print_r($bookmundiTest->getLists(60));
print_r($bookmundiTest->sum($bookmundiTest->getLists(60)));